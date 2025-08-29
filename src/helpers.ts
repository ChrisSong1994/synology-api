import Axios from "axios";
import { GLOBAL_QUICK_CONNECT_URL, QUICK_CONNECT_PINGPANG_API } from "./constants";
import { SynologyApiResponse, QuickConnectServerType } from "@/types";

const getServersFromServerInfo = async (serverInfo, quickConnectServerType) => {
  const serverMap: Record<QuickConnectServerType, string | undefined> = {
    [QuickConnectServerType.proxy]: undefined,
    [QuickConnectServerType.lan]: undefined,
    [QuickConnectServerType.wan]: undefined,
  };
  // proxy server
  if (serverInfo?.service?.relay_ip) {
    serverMap[QuickConnectServerType.proxy] =
      `http://${serverInfo.service.relay_ip}:${serverInfo.service.relay_port}`;
  }

  // WAN IP
  if (serverInfo?.server?.external?.ip) {
    serverMap[QuickConnectServerType.wan] =
      `http://${serverInfo.server.external.ip}:${serverInfo.service.port}`;
  }

  // lan ip
  if (serverInfo?.server?.interface?.[0]) {
    serverMap[QuickConnectServerType.lan] =
      `http://${serverInfo.server.interface?.[0].ip}:${serverInfo.service.port}`;
  }

  const server = serverMap[quickConnectServerType];
  
  if (!server) {
    return Promise.reject(`${quickConnectServerType} server not found`);
  }
  const res = await pingpang(server);
  if (!res) {
    return Promise.reject(`${server} server can not connect`);
  }
  if (res) {
    return server;
  }
};

// get server ip
export type ServerInfo = {
  env: {
    control_host: string;
  };
  server: {
    external: {
      ip: string;
    };
    interface: {
      ip: string;
    }[];
  };
  service: {
    relay_ip: string;
    relay_port: number;
  };
};
export const getServerInfo = async (
  quickConnectId: string,
  quickConnectServerType: QuickConnectServerType
) => {
  const params = {
    version: 1,
    id: "dsm",
    serverID: quickConnectId,
    get_ca_fingerprints: true,
    command: "get_server_info",
  };
  const serverInfo = (await Axios.post<ServerInfo>(GLOBAL_QUICK_CONNECT_URL, params)).data;
  if (!serverInfo?.service?.relay_ip && !serverInfo?.service?.relay_port) {
    const relayRequestParams = {
      version: 1,
      id: "dsm",
      serverID: quickConnectId,
      platform: "web",
      command: "request_tunnel",
    };
    // get replay tunnel
    const result = (
      await Axios.post(`https://${serverInfo.env.control_host}/Serv.php`, relayRequestParams)
    ).data;
    return getServersFromServerInfo(result, quickConnectServerType);
  } else {
    return getServersFromServerInfo(serverInfo, quickConnectServerType);
  }
};

// pingpang
export const pingpang = async (server: string) => {
  try {
    const result = (await Axios.get<SynologyApiResponse>(`${server}/${QUICK_CONNECT_PINGPANG_API}`))
      .data;
    if (result.success) {
      return true;
    } else {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err: any) {
    return false;
  }
};
