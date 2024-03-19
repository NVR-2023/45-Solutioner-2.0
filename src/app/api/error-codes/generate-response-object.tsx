const responseCodeMap = new Map<number, string>([
  [200, "OK"],
  [201, "Created"],
  [204, "No Content"],
  [400, "Bad Request"],
  [401, "Unauthorized"],
  [403, "Forbidden"],
  [404, "Not Found"],
  [405, "Method Not Allowed"],
  [429, "Too Many Requests"],
  [500, "Internal Server Error"],
  [501, "Not Implemented"],
  [502, "Bad Gateway"],
  [503, "Service Unavailable"],
  [504, "Gateway Timeout"],
]);

export type ResponseStatusCodeProp = number & keyof typeof responseCodeMap;

type generateResponseObjectProps = {
  status: ResponseStatusCodeProp;
  body?: Record<string, string> | null;
};

type responseObjectType = {
  ok: boolean;
  status: number;
  statusText: string;
  headers?: {
    [key: string]: string;
  };
  url?: string;
  body?: Record<string, string> | null;
  error?: {
    code: string | null;
    message: string | null;
    details: string | null;
    more_info: string | null;
    severity: string | null;
  } | null;
};

const generateResponseObject = ({
  status,
  body,
}: generateResponseObjectProps) => {
  const responseObject: responseObjectType = {
    ok: status > 299 ? false : true,
    status: status,
    statusText: responseCodeMap.get(status)!,
    headers: {
      "Content-Type": "application/json",
    },
    url: "",
    body: body ? body : null,
    error:
      status > 299
        ? {
            code: "invalid request",
            message: "Missing one or several required fields",
            details: "Missing one or several required fields",
            more_info: "https://api.example.com/docs/errors#RESOURCE_NOT_FOUND",
            severity: "error",
          }
        : null,
  };

  return responseObject;
};

export default generateResponseObject;
