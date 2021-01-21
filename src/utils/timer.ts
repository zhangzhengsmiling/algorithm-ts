const loggerGenerator = (loggerMode: boolean = true) => {
  return (info: string) => {
    if(loggerMode) {
      console.log(info);
    }
  }
}


const timer = <ParamType extends Array<any>>(func: (...param: ParamType) => any, option = { loggerMode: false }) => {
  const logger = loggerGenerator(option.loggerMode);
  return (...args: ParamType): number => {
    const start = new Date().valueOf();
    logger('----begin to run....')
    const retValue = func(...args);
    logger('----end...')
    const end = new Date().valueOf();
    logger('-----------------');
    logger(`${func.name} runs cost ${end - start} ms`);
    logger('-----------------')
    return end - start;
  }
}

export default timer;
