/* Generated by the Nim Compiler v2.1.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555824 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555167 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555174 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555172 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555172 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555172.node = NNI33555172;
NTI33555174.base = NTI33555171;
NTI33555175.base = NTI33555171;
var NNI33555171 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555174, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555175, name: "up", sons: null}]};
NTI33555171.node = NNI33555171;
var NNI33555167 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555167.node = NNI33555167;
NTI33555171.base = NTI33555167;
NTI33555172.base = NTI33555171;
NTI134217745.base = NTI33555172;
var NNI33555824 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555824.node = NNI33555824;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555172;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555172;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555172;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557255, src_33557256, ti_33557257) {
  var result_33557266 = null;

    switch (ti_33557257.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557246(ti_33557257))) {
      result_33557266 = src_33557256;
      }
      else {
        result_33557266 = [src_33557256[0], src_33557256[1]];
      }
      
      break;
    case 19:
            if (dest_33557255 === null || dest_33557255 === undefined) {
        dest_33557255 = {};
      }
      else {
        for (var key in dest_33557255) { delete dest_33557255[key]; }
      }
      for (var key in src_33557256) { dest_33557255[key] = src_33557256[key]; }
      result_33557266 = dest_33557255;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557257.base == null))) {
      result_33557266 = nimCopy(dest_33557255, src_33557256, ti_33557257.base);
      }
      else {
      if ((ti_33557257.kind == 17)) {
      result_33557266 = (dest_33557255 === null || dest_33557255 === undefined) ? {m_type: ti_33557257} : dest_33557255;
      }
      else {
        result_33557266 = (dest_33557255 === null || dest_33557255 === undefined) ? {} : dest_33557255;
      }
      }
      nimCopyAux(result_33557266, src_33557256, ti_33557257.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557256)) { 
        if(dest_33557255 === null || dest_33557255 === undefined || dest_33557255.length != src_33557256.length) {
          dest_33557255 = new src_33557256.constructor(src_33557256);
        } else {
          dest_33557255.set(src_33557256, 0);
        }
        result_33557266 = dest_33557255;
      } else {
        if (src_33557256 === null) {
          result_33557266 = null;
        }
        else {
          if (dest_33557255 === null || dest_33557255 === undefined || dest_33557255.length != src_33557256.length) {
            dest_33557255 = new Array(src_33557256.length);
          }
          result_33557266 = dest_33557255;
          for (var i = 0; i < src_33557256.length; ++i) {
            result_33557266[i] = nimCopy(result_33557266[i], src_33557256[i], ti_33557257.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557256 === null) {
        result_33557266 = null;
      }
      else {
        if (dest_33557255 === null || dest_33557255 === undefined || dest_33557255.length != src_33557256.length) {
          dest_33557255 = new Array(src_33557256.length);
        }
        result_33557266 = dest_33557255;
        for (var i = 0; i < src_33557256.length; ++i) {
          result_33557266[i] = nimCopy(result_33557266[i], src_33557256[i], ti_33557257.base);
        }
      }
    
      break;
    case 28:
            if (src_33557256 !== null) {
        result_33557266 = src_33557256.slice(0);
      }
    
      break;
    default: 
      result_33557266 = src_33557256;
      break;
    }

  return result_33557266;

}

function arrayConstr(len_33557301, value_33557302, typ_33557303) {
        var result = new Array(len_33557301);
    for (var i = 0; i < len_33557301; ++i) result[i] = nimCopy(null, value_33557302, typ_33557303);
    return result;
  

  
}

function mnewString(len_33556990) {
        var result = new Array(len_33556990);
    for (var i = 0; i < len_33556990; i++) {result[i] = 0;}
    return result;
  

  
}

function addInt(a_33557037, b_33557038) {
        var result = a_33557037 + b_33557038;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557311, a_33557312, b_33557313) {
  var result_33557314 = 0;

  BeforeRet: {
    if (((a_33557312 <= i_33557311) && (i_33557311 <= b_33557313))) {
    result_33557314 = i_33557311;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557314;

}

function chckIndx(i_33557306, a_33557307, b_33557308) {
  var result_33557309 = 0;

  BeforeRet: {
    if (((a_33557307 <= i_33557306) && (i_33557306 <= b_33557308))) {
    result_33557309 = i_33557306;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557306, a_33557307, b_33557308);
    }
    
  };

  return result_33557309;

}

function cstrToNimstr(c_33556888) {
      var ln = c_33556888.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556888.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556888.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556891) {
  var result_33556892 = null;

    var res_33556933 = newSeq_33556909((s_33556891).length);
    var i_33556934 = 0;
    var j_33556935 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556934 < (s_33556891).length)) break Label2;
          var c_33556936 = s_33556891[i_33556934];
          if ((c_33556936 < 128)) {
          res_33556933[j_33556935] = String.fromCharCode(c_33556936);
          i_33556934 += 1;
          }
          else {
            var helper_33556948 = newSeq_33556909(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556949 = c_33556936.toString(16);
                  if ((((code_33556949) == null ? 0 : (code_33556949).length) == 1)) {
                  helper_33556948.push("%0");;
                  }
                  else {
                  helper_33556948.push("%");;
                  }
                  
                  helper_33556948.push(code_33556949);;
                  i_33556934 += 1;
                  if ((((s_33556891).length <= i_33556934) || (s_33556891[i_33556934] < 128))) {
                  break Label3;
                  }
                  
                  c_33556936 = s_33556891[i_33556934];
                }
            };
++excHandler;
            try {
            res_33556933[j_33556935] = decodeURIComponent(helper_33556948.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556933[j_33556935] = helper_33556948.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556935 += 1;
        }
    };
    if (res_33556933.length < j_33556935) { for (var i = res_33556933.length ; i < j_33556935 ; ++i) res_33556933.push(null); }
               else { res_33556933.length = j_33556935; };
    result_33556892 = res_33556933.join("");

  return result_33556892;

}

function raiseException(e_33556643, ename_33556644) {
    e_33556643.name = ename_33556644;
    if ((excHandler == 0)) {
    unhandledException(e_33556643);
    }
    
    e_33556643.trace = nimCopy(null, rawWriteStackTrace_33556594(), NTI33554449);
    throw e_33556643;

  
}

function makeNimstrLit(c_33556885) {
      var result = [];
  for (var i = 0; i < c_33556885.length; ++i) {
    result[i] = c_33556885.charCodeAt(i);
  }
  return result;
  

  
}

function subInt(a_33557041, b_33557042) {
        var result = a_33557041 - b_33557042;
    checkOverflowInt(result);
    return result;
  

  
}
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557246(ti_33557247) {
  var result_33557248 = false;

  BeforeRet: {
    result_33557248 = !((ConstSet1[ti_33557247.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557248;

}

function nimCopyAux(dest_33557259, src_33557260, n_33557261) {
    switch (n_33557261.kind) {
    case 0:
      break;
    case 1:
            dest_33557259[n_33557261.offset] = nimCopy(dest_33557259[n_33557261.offset], src_33557260[n_33557261.offset], n_33557261.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557261.sons.length; i++) {
      nimCopyAux(dest_33557259, src_33557260, n_33557261.sons[i]);
    }
    
      break;
    case 3:
            dest_33557259[n_33557261.offset] = nimCopy(dest_33557259[n_33557261.offset], src_33557260[n_33557261.offset], n_33557261.typ);
      for (var i = 0; i < n_33557261.sons.length; ++i) {
        nimCopyAux(dest_33557259, src_33557260, n_33557261.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556366(x_33556367, x_33556367_Idx, y_33556368) {
          if (x_33556367[x_33556367_Idx] === null) { x_33556367[x_33556367_Idx] = []; }
      var off = x_33556367[x_33556367_Idx].length;
      x_33556367[x_33556367_Idx].length += y_33556368.length;
      for (var i = 0; i < y_33556368.length; ++i) {
        x_33556367[x_33556367_Idx][off+i] = y_33556368.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557035) {
        if (a_33557035 > 2147483647 || a_33557035 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556802, a_33556803, b_33556804) {
    var Temporary1;

    if ((b_33556804 < a_33556803)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556802) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556803) || [],[32,46,46,32] || [],HEX24_369098760(b_33556804) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990087(result_301990089, result_301990089_Idx, x_301990090, start_301990091, n_301990092) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 44;
    F.filename = "digitsutils.nim";
    var old_301990093 = (result_301990089[result_301990089_Idx]).length;
    F.line = 45;
    if (result_301990089[result_301990089_Idx].length < (Temporary1 = chckRange(addInt(old_301990093, n_301990092), 0, 2147483647), Temporary1)) { for (var i = result_301990089[result_301990089_Idx].length; i < Temporary1; ++i) result_301990089[result_301990089_Idx].push(0); }
         else {result_301990089[result_301990089_Idx].length = Temporary1; };
    Label2: {
      F.line = 47;
      var iHEX60gensym4_301990107 = 0;
      F.line = 128;
      F.filename = "iterators_1.nim";
      var i_654311685 = 0;
      Label3: {
        F.line = 129;
          Label4: while (true) {
          if (!(i_654311685 < n_301990092)) break Label4;
            F.line = 50;
            F.filename = "digitsutils.nim";
            iHEX60gensym4_301990107 = i_654311685;
            F.line = 50;
            result_301990089[result_301990089_Idx][chckIndx(addInt(old_301990093, iHEX60gensym4_301990107), 0, (result_301990089[result_301990089_Idx]).length - 1)] = x_301990090.charCodeAt(chckIndx(addInt(start_301990091, iHEX60gensym4_301990107), 0, (x_301990090).length - 1));
            F.line = 131;
            F.filename = "iterators_1.nim";
            i_654311685 = addInt(i_654311685, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990083(result_301990085, result_301990085_Idx, x_301990086) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 56;
    F.filename = "digitsutils.nim";
    addChars_301990087(result_301990085, result_301990085_Idx, x_301990086, 0, ((x_301990086) == null ? 0 : (x_301990086).length));
  framePtr = F.prev;

  
}

function addInt_301990108(result_301990109, result_301990109_Idx, x_301990110) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 112;
    F.filename = "digitsutils.nim";
    addChars_301990083(result_301990109, result_301990109_Idx, ((x_301990110) + ""));
  framePtr = F.prev;

  
}

function addInt_301990126(result_301990127, result_301990127_Idx, x_301990128) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 116;
    F.filename = "digitsutils.nim";
    addInt_301990108(result_301990127, result_301990127_Idx, BigInt(x_301990128));
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    F.filename = "dollars.nim";
    addInt_301990126(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556501(f_33556502) {
  var result_33556503 = [[]];

    var it_33556511 = f_33556502;
    var i_33556512 = 0;
    var total_33556513 = 0;
    var tempFrames_33556514 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555824);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556511 == null)) && (i_33556512 <= 63))) break Label2;
          tempFrames_33556514[i_33556512].Field0 = it_33556511.procname;
          tempFrames_33556514[i_33556512].Field1 = it_33556511.line;
          tempFrames_33556514[i_33556512].Field2 = it_33556511.filename;
          i_33556512 += 1;
          total_33556513 += 1;
          it_33556511 = it_33556511.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556511 == null))) break Label4;
          total_33556513 += 1;
          it_33556511 = it_33556511.prev;
        }
    };
    result_33556503[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556513 == i_33556512))) {
    result_33556503[0].push.apply(result_33556503[0], [40]);;
    result_33556503[0].push.apply(result_33556503[0], HEX24_369098760((total_33556513 - i_33556512)));;
    result_33556503[0].push.apply(result_33556503[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556544 = 0;
      var colontmp__654311677 = 0;
      colontmp__654311677 = (i_33556512 - 1);
      var res_654311679 = colontmp__654311677;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311679)) break Label7;
            j_33556544 = res_654311679;
            result_33556503[0].push.apply(result_33556503[0], cstrToNimstr(tempFrames_33556514[j_33556544].Field2));;
            if ((0 < tempFrames_33556514[j_33556544].Field1)) {
            result_33556503[0].push.apply(result_33556503[0], [40]);;
            addInt_301990126(result_33556503, 0, tempFrames_33556514[j_33556544].Field1);
            if (false) {
            result_33556503[0].push.apply(result_33556503[0], [44,32]);;
            addInt_301990126(result_33556503, 0, 0);
            }
            
            result_33556503[0].push.apply(result_33556503[0], [41]);;
            }
            
            result_33556503[0].push.apply(result_33556503[0], [32,97,116,32]);;
            add_33556366(result_33556503, 0, tempFrames_33556514[j_33556544].Field0);
            result_33556503[0].push.apply(result_33556503[0], [10]);;
            res_654311679 -= 1;
          }
      };
    };

  return result_33556503[0];

}

function rawWriteStackTrace_33556594() {
  var result_33556595 = [];

    if (!((framePtr == null))) {
    result_33556595 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556501(framePtr) || []), NTI33554449);
    }
    else {
      result_33556595 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556595;

}

function newSeq_33556909(len_33556911) {
  var result_33556912 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 636;
    F.filename = "system.nim";
    result_33556912 = new Array(len_33556911); for (var i = 0 ; i < len_33556911 ; ++i) { result_33556912[i] = null; }  framePtr = F.prev;

  return result_33556912;

}

function unhandledException(e_33556639) {
    var buf_33556640 = [[]];
    if (!(((e_33556639.message).length == 0))) {
    buf_33556640[0].push.apply(buf_33556640[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556640[0].push.apply(buf_33556640[0], e_33556639.message);;
    }
    else {
    buf_33556640[0].push.apply(buf_33556640[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556640[0].push.apply(buf_33556640[0], [32,91]);;
    add_33556366(buf_33556640, 0, e_33556639.name);
    buf_33556640[0].push.apply(buf_33556640[0], [93,10]);;
    buf_33556640[0].push.apply(buf_33556640[0], rawWriteStackTrace_33556594());;
    var cbuf_33556641 = toJSStr(buf_33556640[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556641);
  }
  else {
    throw cbuf_33556641;
  }
  

  
}

function sysFatal_268435501(message_268435504) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    F.filename = "fatal.nim";
    raiseException({message: nimCopy(null, message_268435504, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435499(msg_268435500) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    F.filename = "assertions.nim";
    sysFatal_268435501(msg_268435500);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435541(msg_268435542) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    F.filename = "assertions.nim";
    raiseAssert_268435499(msg_268435542);
  framePtr = F.prev;

  
}

function HEX3DHEX3D_654311437(x_654311439, y_654311440) {
  var result_654311441 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    F.filename = "comparisons.nim";
    var sameObject_654311449 = false;
    F.line = 327;
    sameObject_654311449 = x_654311439 === y_654311440
    if (sameObject_654311449) {
    F.line = 328;
    result_654311441 = true;
    break BeforeRet;
    }
    
    if (!(((x_654311439).length == (y_654311440).length))) {
    F.line = 331;
    result_654311441 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_654311463 = 0;
      F.line = 81;
      F.filename = "iterators_1.nim";
      var colontmp__654311690 = 0;
      F.line = 333;
      F.filename = "comparisons.nim";
      colontmp__654311690 = subInt((x_654311439).length, 1);
      F.line = 96;
      F.filename = "iterators_1.nim";
      var res_654311692 = 0;
      Label2: {
        F.line = 97;
          Label3: while (true) {
          if (!(res_654311692 <= colontmp__654311690)) break Label3;
            F.line = 333;
            F.filename = "comparisons.nim";
            i_654311463 = res_654311692;
            if (!((x_654311439[chckIndx(i_654311463, 0, (x_654311439).length - 1)] == y_654311440[chckIndx(i_654311463, 0, (y_654311440).length - 1)]))) {
            F.line = 335;
            result_654311441 = false;
            break BeforeRet;
            }
            
            F.line = 102;
            F.filename = "iterators_1.nim";
            res_654311692 = addInt(res_654311692, 1);
          }
      };
    };
    F.line = 337;
    F.filename = "comparisons.nim";
    result_654311441 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_654311441;

}

function HEX3DHEX3D_654311523(x_654311525, y_654311526) {
  var result_654311527 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    if (!((x_654311525["Field0"] == y_654311526["Field0"]))) {
    F.line = 1770;
    F.filename = "system.nim";
    result_654311527 = false;
    break BeforeRet;
    }
    
    if (!((x_654311525["Field1"] == y_654311526["Field1"]))) {
    F.line = 1770;
    result_654311527 = false;
    break BeforeRet;
    }
    
    F.line = 1771;
    result_654311527 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_654311527;

}

function HEX3DHEX3D_654311496(x_654311498, y_654311499) {
  var result_654311500 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    F.filename = "comparisons.nim";
    var sameObject_654311508 = false;
    F.line = 327;
    sameObject_654311508 = x_654311498 === y_654311499
    if (sameObject_654311508) {
    F.line = 328;
    result_654311500 = true;
    break BeforeRet;
    }
    
    if (!(((x_654311498).length == (y_654311499).length))) {
    F.line = 331;
    result_654311500 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_654311522 = 0;
      F.line = 81;
      F.filename = "iterators_1.nim";
      var colontmp__654311695 = 0;
      F.line = 333;
      F.filename = "comparisons.nim";
      colontmp__654311695 = subInt((x_654311498).length, 1);
      F.line = 96;
      F.filename = "iterators_1.nim";
      var res_654311696 = 0;
      Label2: {
        F.line = 97;
          Label3: while (true) {
          if (!(res_654311696 <= colontmp__654311695)) break Label3;
            F.line = 333;
            F.filename = "comparisons.nim";
            i_654311522 = res_654311696;
            if (!(HEX3DHEX3D_654311523(x_654311498[chckIndx(i_654311522, 0, (x_654311498).length - 1)], y_654311499[chckIndx(i_654311522, 0, (y_654311499).length - 1)]))) {
            F.line = 335;
            result_654311500 = false;
            break BeforeRet;
            }
            
            F.line = 102;
            F.filename = "iterators_1.nim";
            res_654311696 = addInt(res_654311696, 1);
          }
      };
    };
    F.line = 337;
    F.filename = "comparisons.nim";
    result_654311500 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_654311500;

}
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
Label1: {
  F.line = 51;
  F.filename = "jsheaders.nim";
  var header_654311427 = new Headers();
  F.line = 51;
  header_654311427.append("key", "value");
  if (!(header_654311427.has("key"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(13, 5) `header.hasKey(\"key\")` "));
  }
  
  if (!(HEX3DHEX3D_654311437(Array.from(header_654311427.keys()), ["key"]))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(14, 5) `header.keys() == @[\"key\".cstring]` "));
  }
  
  if (!(HEX3DHEX3D_654311437(Array.from(header_654311427.values()), ["value"]))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(15, 5) `header.values() == @[\"value\".cstring]` "));
  }
  
  if (!((header_654311427.get("key") == "value"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(16, 5) `header[\"key\"] == \"value\".cstring` "));
  }
  
  F.line = 51;
  header_654311427.set("other", "another");
  if (!((header_654311427.get("other") == "another"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(18, 5) `header[\"other\"] == \"another\".cstring` "));
  }
  
  if (!(HEX3DHEX3D_654311496(Array.from(header_654311427.entries()), [{Field0: "key", Field1: "value"}, {Field0: "other", Field1: "another"}]))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(19, 5) `header.entries() ==\x0A    @[(\"key\".cstring, \"value\".cstring), (\"other\".cstring, \"another\".cstring)]` "));
  }
  
  if (!((JSON.stringify(Array.from(header_654311427.entries())) == "[[\"key\",\"value\"],[\"other\",\"another\"]]"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(20, 5) `header.toCstring() == \"\"\"[[\"key\",\"value\"],[\"other\",\"another\"]]\"\"\".cstring` "));
  }
  
  F.line = 51;
  header_654311427.delete("other");
  if (!(HEX3DHEX3D_654311496(Array.from(header_654311427.entries()), [{Field0: "key", Field1: "value"}]))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(22, 5) `header.entries() == @[(\"key\".cstring, \"value\".cstring)]` "));
  }
  
  F.line = 51;
  (() => { const header = header_654311427; Array.from(header.keys()).forEach((key) => header.delete(key)) })();
  if (!(HEX3DHEX3D_654311496(Array.from(header_654311427.entries()), []))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(24, 5) `header.entries() == @[]` "));
  }
  
  if (!((Array.from(header_654311427.entries()).length == 0))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(25, 5) `header.len == 0` "));
  }
  
};
Label2: {
  F.line = 51;
  var header_654311574 = new Headers();
  F.line = 51;
  header_654311574.append("key", "a");
  F.line = 51;
  header_654311574.append("key", "b");
  F.line = 51;
  header_654311574.append("key", "c");
  if (!((header_654311574.get("key") == "a, b, c"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(32, 5) `header[\"key\"] == \"a, b, c\".cstring` "));
  }
  
  F.line = 51;
  header_654311574.set("key", "value");
  if (!((header_654311574.get("key") == "value"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(34, 5) `header[\"key\"] == \"value\".cstring` "));
  }
  
};
Label3: {
  F.line = 51;
  var header_654311585 = new Headers();
  F.line = 51;
  header_654311585.set("key", "a");
  F.line = 51;
  header_654311585.set("key", "b");
  if (!((header_654311585.get("key") == "b"))) {
  F.line = 51;
  failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(40, 5) `header[\"key\"] == \"b\".cstring` "));
  }
  
};
framePtr = F.prev;
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
