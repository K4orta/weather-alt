export default (code)=> String(code).length === 5 && String(code).match(/^\d+$/) !== null;
