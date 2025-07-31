import { CoreApi, SynologyApiResponse } from "@/types";

export type SystemStatusResponse = SynologyApiResponse<{
  is_system_crashed: boolean;
  upgrade_ready: boolean;
}>;
export async function getSystemStatus(): Promise<SystemStatusResponse> {
  const res = await this.run(CoreApi.SystemStatus, {
    params: {
      method: "get",
    },
  });
  return res;
}

export type SystemInfoResponse = SynologyApiResponse<{
  cpu_clock_speed: number;
  cpu_cores: string;
  cpu_family: string;
  cpu_series: string;
  cpu_vendor: string;
  enabled_ntp: boolean;
  external_pci_slot_info: Array<any>;
  firmware_date: string;
  firmware_ver: string;
  model: string;
  ntp_server: string;
  ram_size: number;
  sata_dev: Array<any>;
  serial: string;
  support_esata: string;
  sys_temp: number;
  sys_tempwarn: boolean;
  systempwarn: boolean;
  temperature_warning: boolean;
  time: string;
  time_zone: string;
  time_zone_desc: string;
  up_time: string;
  usb_dev: Array<any>;
}>;
export async function getSystemInfo(): Promise<SystemInfoResponse> {
  const res = await this.run(CoreApi.System, {
    params: {
      method: "info",
    },
  });
  return res;
}

export type SystemStorageInfoResponse = SynologyApiResponse<{
  hdd_info: Array<{
    capacity: string;
    diskPath: string;
    diskType: string;
    diskno: string;
    ebox_order: number;
    model: string;
    order: number;
    overview_status: string;
    pciSlot: number;
    portType: string;
    status: string;
    summary_status_category: string;
    summary_status_key: string;
    temp: number;
    testing_progress: string;
    testing_type: string;
    volume: string;
  }>;
  vol_info: Array<{
    desc: string;
    inode_free: string;
    inode_total: string;
    name: string;
    status: string;
    total_size: string;
    used_size: string;
    vol_desc: string;
    volume: string;
  }>;
}>;

export async function getSystemStorageInfo(): Promise<SystemStorageInfoResponse> {
  const res = await this.run(CoreApi.System, {
    params: {
      method: "info",
      type: "storage",
    },
  });
  return res;
}

export type SystemHealthResponse = SynologyApiResponse<{
  hostname: string;
  interfaces: Array<{
    id: string;
    ip: string;
    type: string;
  }>;
  rule: {
    description: {
      description_format: string;
      description_params: Array<string>;
      description_use_formatted: boolean;
    };
    id: string;
    priority: number;
    type: number;
  };
  uptime: string;
}>;

export async function getSystemHealth(): Promise<SystemHealthResponse> {
  const res = await this.run(CoreApi.SystemHealth, {
    params: {
      method: "get",
    },
  });
  return res;
}

export type CoreSystemUtilizationResponse = SynologyApiResponse<{
  cpu: {
    "15min_load": number;
    "1min_load": number;
    "5min_load": number;
    device: string;
    other_load: number;
    system_load: number;
    user_load: number;
  };
  disk: {
    disk: Array<{
      device: string;
      display_name: string;
      read_access: number;
      read_byte: number;
      type: string;
      utilization: number;
      write_access: number;
      write_byte: number;
    }>;
    total: {
      device: string;
      read_access: number;
      read_byte: number;
      utilization: number;
      write_access: number;
      write_byte: number;
    };
  };
  lun: Array<any>;
  memory: {
    avail_real: number;
    avail_swap: number;
    buffer: number;
    cached: number;
    device: string;
    memory_size: number;
    real_usage: number;
    si_disk: number;
    so_disk: number;
    swap_usage: number;
    total_real: number;
    total_swap: number;
  };
  network: Array<{
    device: string;
    rx: number;
    tx: number;
  }>;
  nfs: Array<any>;
  space: {
    total: {
      device: string;
      read_access: number;
      read_byte: number;
      utilization: number;
      write_access: number;
      write_byte: number;
    };
    volume: Array<{
      device: string;
      display_name: string;
      read_access: number;
      read_byte: number;
      utilization: number;
      write_access: number;
      write_byte: number;
    }>;
  };
  time: number;
}>;

export async function getSystemUtilization(): Promise<CoreSystemUtilizationResponse> {
  const res = await this.run(CoreApi.SystemUtilization, {
    params: {
      method: "get",
    },
  });
  return res;
}
