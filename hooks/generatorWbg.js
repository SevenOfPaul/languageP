export default function () {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_appendtooutput_f4cf948a8bb19842 = function (
    arg0,
    arg1,
    arg2
  ) {
    append_to_output(getStringFromWasm0(arg0, arg1), arg2 !== 0);
  };
  imports.wbg.__wbg_getTime_ab8b72009983c537 = function (arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
  };
  imports.wbg.__wbg_getTimezoneOffset_ec375e661c590c7a = function (arg0) {
    const ret = getObject(arg0).getTimezoneOffset();
    return ret;
  };
  imports.wbg.__wbg_new0_55477545727914d9 = function () {
    const ret = new Date();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_41257536af60ed14 = function (arg0) {
    const ret = new Date(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_number_new = function (arg0) {
    const ret = arg0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };

  return imports;
}