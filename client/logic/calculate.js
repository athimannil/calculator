import operate from './operate';

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
      memory: null
    };
  }

  if (buttonName === 'C') {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (/[0-9]+/.test(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: obj.next + '.' };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: obj.total + '.' };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {

      return {};
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (buttonName === '√') {
    if (obj.next) {
      return {
        total: operate(obj.next, obj.next, buttonName),
        next: null,
        operation: buttonName,
      };
    }
  }

  if (buttonName === 'OFF') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === 'MC') {
    return {
      memory: null
    };
  }
  if (buttonName === 'MR') {
    if (obj.total) {
      return {
        next: Number(obj.total)
      };
    } else {
      return {};
    }
  }
  if (buttonName === 'M-') {
    if (obj.total) {
      return {
        memory: Number(obj.memory) - Number(obj.total)
      };
    } else {
      return {};
    }
  }
  if (buttonName === 'M+') {
    if (obj.total) {
      return {
        memory: Number(obj.memory) + Number(obj.total)
      };
    } else {
      return {};
    }
  }


  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
