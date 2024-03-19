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

type responseObjectType = {
  ok: boolean;
  status: number;
  body?: object;
  error?: string;
};

type generateResponseObjectProps = {
  status: ResponseStatusCodeProp;
  body?: object;
  error?: object;
};

const generateResponseObject = ({
  status,
  body,
}: generateResponseObjectProps) => {

  const responseObject: responseObjectType = {
    ok: status < 300,
    status: status,
    body: body,
  };

  if (status > 300) { responseObject.error = responseCodeMap.get(status);  }
  return responseObject;
};

export default generateResponseObject;
