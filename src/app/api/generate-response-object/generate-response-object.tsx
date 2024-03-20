const responseCodeMap = new Map<number, string>([
  [200, "OK"],
  [201, "Created"],
  [204, "No Content"],
  [400, "Bad Request"],
  [401, "Unauthorized"],
  [403, "Forbidden"],
  [404, "Not Found"],
  [405, "Method Not Allowed"],
  [409, "Resource already exists"],
  [429, "Too Many Requests"],
  [500, "Internal Server Error"],
  [501, "Not Implemented"],
  [502, "Bad Gateway"],
  [503, "Service Unavailable"],
  [504, "Gateway Timeout"],
]);

type responseObjectType = {
  ok: boolean;
  status: number;
  data?: object;
  errors?: {
    message: string;
    validationErrors?: object;
  };
};

type generateResponseObjectProps = {
  status: number;
  data?: object;
  validationErrors?: object;
};

const generateResponseObject = ({
  status,
  data,
  validationErrors,
}: generateResponseObjectProps): responseObjectType => {
  const responseObject: responseObjectType = {
    ok: status < 300,
    status: status,
    data: data,
    errors: undefined,
  };

  if (status > 300) {
    responseObject.errors = {
      message: responseCodeMap.get(status) || "Unknown Error",
      validationErrors: validationErrors,
    };
  }

  return responseObject;
};

export default generateResponseObject;
