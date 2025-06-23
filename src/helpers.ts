import axios from "axios";
import { GLOBAL_QUICK_CONNECT_URL, QUICK_CONNECT_PINGPANG_API } from "./constants";

const getServersFromServerInfo = async (serverInfo) => {
  // proxy server
  if (serverInfo.service.relay_ip) {
    const server = `http://${serverInfo.service.relay_ip}:${serverInfo.service.relay_port}`;
    const res = await pingpang(server);
    if (res) {
      return server;
    }
  }

  // WAN IP
  if (serverInfo.server.external.ip) {
    const server = `http://${serverInfo.server.external.ip}:${serverInfo.service.port}`;
    if (await pingpang(server)) {
      return server;
    }
  }

  // lan ip
  if (serverInfo.server.interface?.[0]) {
    const server = `http://${serverInfo.server.interface?.[0].ip}:${serverInfo.service.port}`;
    if (await pingpang(server)) {
      return server;
    }
  }
};

// get server ip
export const getServerInfo = async (quickConnectId: string) => {
  const params = {
    version: 1,
    id: "dsm",
    serverID: quickConnectId,
    get_ca_fingerprints: true,
    command: "get_server_info",
  };
  const serverInfo = await axios.post(GLOBAL_QUICK_CONNECT_URL, params);
  if (!serverInfo.data?.service?.relay_ip && !serverInfo.data?.service?.relay_port) {
    const relayRequestParams = {
      version: 1,
      id: "dsm",
      serverID: quickConnectId,
      platform: "web",
      command: "request_tunnel",
    };
    const result = await axios.post(
      `https://${serverInfo.data.env.control_host}/Serv.php`,
      relayRequestParams
    );
    return getServersFromServerInfo(result.data);
  } else {
    return getServersFromServerInfo(serverInfo.data);
  }
};

// pingpang
export const pingpang = async (server: string) => {
  try {
    const result = await axios.get(`${server}/${QUICK_CONNECT_PINGPANG_API}`, {
      timeout: 3000,
    });
    if (result.data.success) {
      return true;
    } else {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err: any) {
    return false;
  }
};
