import Axios from "axios";
import { GLOBAL_QUICK_CONNECT_URL, QUICK_CONNECT_PINGPANG_API } from "./constants";
import { SynologyApiResponse } from "@/types";

const getServersFromServerInfo = async (serverInfo) => {
  // first lan ip
  // lan ip
  if (serverInfo?.server?.interface?.[0]) {
    const server = `http://${serverInfo.server.interface?.[0].ip}:${serverInfo.service.port}`;
    const res = await pingpang(server);
    if (res) {
      return server;
    }
  }

  // WAN IP
  if (serverInfo?.server?.external?.ip) {
    const server = `http://${serverInfo.server.external.ip}:${serverInfo.service.port}`;
    const res = await pingpang(server);
    if (res) {
      return server;
    }
  }

  // proxy server
  if (serverInfo?.service?.relay_ip) {
    const server = `http://${serverInfo.service.relay_ip}:${serverInfo.service.relay_port}`;
    const res = await pingpang(server);
    if (res) {
      return server;
    }
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
export const getServerInfo = async (quickConnectId: string) => {
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
    const result = (
      await Axios.post(`https://${serverInfo.env.control_host}/Serv.php`, relayRequestParams)
    ).data;
    return getServersFromServerInfo(result);
  } else {
    return getServersFromServerInfo(serverInfo);
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
