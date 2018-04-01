"use strict";
/*******************************************/

/**************Таблица модулей**************/

/*******************************************/

var Modules = {
  def: {
    reqFields: [],
    description: "Выберите модуль...",
    comment: "Выберите модуль из списка для начала работы. Для смены типа отображения функций в списке используйте соотвествующие переключатели в верху страницы."
  },
  COM_NN_D: {
    func: COM_NN_D,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Natural,
      regexType: "N0"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Natural,
      regexType: "N0"
    }],
    description: "Сравнение натуральных чисел",
    returnCodes: {
      0: "Числа одинаковы",
      1: "Второе число больше первого",
      2: "Первое число больше второго"
    }
  },
  NZER_N_B: {
    func: NZER_N_B,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Natural,
      regexType: "N0"
    }],
    description: "Проверка на ноль",
    returnCodes: {
      0: "Число равно 0",
      1: "Число не равно 0"
    }
  },
  ADD_1N_N: {
    func: ADD_1N_N,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Natural,
      regexType: "N0"
    }],
    description: "Добавление 1 к натуральному числу"
  },
  SUB_NN_N: {
    func: SUB_NN_N,
    reqFields: [{
      caption: "Уменьшаемое",
      name: "a1",
      classType: Natural,
      regexType: "N0"
    }, {
      caption: "Вычитаемое",
      name: "a2",
      classType: Natural,
      regexType: "N0"
    }],
    description: "Вычитание из первого большего натурального числа второго меньшего или равного"
  },
  MUL_Nk_N: {
    func: MUL_Nk_N,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Natural,
      regexType: "N0"
    }, {
      caption: "k",
      name: "k",
      classType: Number,
      regexType: "N0"
    }],
    description: "Умножение натурального числа на 10^k"
  },
  DIV_NN_Dk: {
    func: DIV_NN_Dk,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Natural,
      regexType: "N0"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Natural,
      regexType: "N"
    }],
    description: "Вычисление первой цифры деления большего натурального на меньшее, домноженное на 10^k",
    comment: "k - номер позиции цифры (номер считается с нуля)",
    formatter: function formatter(dk) {
      return dk.d + "*10" + Utils.subU(dk.k);
    }
  },
  ABS_Z_N: {
    func: ABS_Z_N,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Абсолютная величина числа, результат - натуральное"
  },
  POZ_Z_D: {
    func: POZ_Z_D,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Определение положительности числа",
    returnCodes: {
      0: "Число равно нулю",
      1: "Число отрицательно",
      2: "Число положительно"
    }
  },
  MUL_ZM_Z: {
    func: MUL_ZM_Z,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Умножение целого на (-1)"
  },
  TRANS_N_Z: {
    func: TRANS_N_Z,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Natural,
      regexType: "N"
    }],
    description: "Преобразование натурального в целое"
  },
  TRANS_Z_N: {
    func: TRANS_Z_N,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Integer,
      regexType: "N0"
    }],
    description: "Преобразование целого неотрицательного в натуральное"
  },
  INT_Q_B: {
    func: INT_Q_B,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Rational,
      regexType: "Q"
    }],
    description: "Проверка на целое, если рациональное число является целым",
    returnCodes: {
      0: "Число является целым",
      1: "Число не является целым"
    }
  },
  TRANS_Z_Q: {
    func: TRANS_Z_Q,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Преобразование целого в дробное"
  },
  TRANS_Q_Z: {
    func: TRANS_Q_Z,
    reqFields: [{
      caption: "Число",
      name: "a",
      classType: Rational,
      regexType: "Q"
    }],
    description: "Преобразование дробного в целое (если знаменатель равен 1)"
  },
  DER_P_P: {
    func: DER_P_P,
    reqFields: [{
      caption: "Коэффициенты многочлена",
      name: "a",
      classType: Polynomial,
      regexType: "P"
    }],
    description: "Производная многочлена",
    comment: "Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: '-3/2 1/2 0 42' будет соответствовать многочлену -3/2x³+1/2x²+42"
  },
  MUL_PP_P: {
        func: MUL_PP_P,
        reqFields: [
            {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
            {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
        ],
        description: 'Умножение многочленов',
        comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
    },
    DIV_PP_P: {
        func: DIV_PP_P,
        reqFields: [
            {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
            {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
        ],
        description: 'Частное от деления многочлена на многочлен при делении с остатком',
        comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
    },
    MOD_PP_P: {
        func: MOD_PP_P,
        reqFields: [
            {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
            {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
        ],
        description: 'Остаток от деления многочлена на многочлен при делении с остатком',
        comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
    },
    ADD_ZZ_Z: {
        func: ADD_ZZ_Z,
        reqFields: [{
            caption: "Первое число",
            name: "a1",
            classType: Integer,
            regexType: "Z"
        }, {
            caption: "Второе число",
            name: "a2",
            classType: Integer,
            regexType: "Z"
        }],
        description: "Сложение целых чисел"
    },
    MUL_ZZ_Z: {
        func: MUL_ZZ_Z,
        reqFields: [{
            caption: "Первое число",
            name: "a1",
            classType: Integer,
            regexType: "Z"
        }, {
            caption: "Второе число",
            name: "a2",
            classType: Integer,
            regexType: "Z"
        }],
        description: "Умножение целых чисел"
    },
    SUB_ZZ_Z: {
        func: SUB_ZZ_Z,
        reqFields: [{
            caption: "Первое число",
            name: "a1",
            classType: Integer,
            regexType: "Z"
        }, {
            caption: "Второе число",
            name: "a2",
            classType: Integer,
            regexType: "Z"
        }],
        description: "Вычитание целых чисел"
    },
    DIV_ZZ_Z: {
        func: DIV_ZZ_Z,
        reqFields: [{
            caption: "Первое число",
            name: "a1",
            classType: Integer,
            regexType: "Z"
        }, {
            caption: "Второе число",
            name: "a2",
            classType: Integer,
            regexType: "Z"
        }],
        description: "Частное от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)"
    },
    MOD_ZZ_Z: {
        func: MOD_ZZ_Z,
        reqFields: [{
            caption: "Первое число",
            name: "a1",
            classType: Integer,
            regexType: "Z"
        }, {
            caption: "Второе число",
            name: "a2",
            classType: Integer,
            regexType: "Z"
        }],
        description: "Остаток от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)"
    }
};
/*******************************************/

/*************Реализация функций************/

/*******************************************/

function COM_NN_D(num1, num2) {
  // Сравниваем порядок
  if (num1.n > num2.n) return 2;
  if (num2.n > num1.n) return 1; // Ищем первый различный старший разряд

  for (var i = 0; i < num1.n; i++) {
    if (num1.a[i] > num2.a[i]) return 2;
    if (num2.a[i] > num1.a[i]) return 1;
  }

  return 0;
}

function NZER_N_B(num) {
  return num.n > 0 ? 1 : 0;
}

function ADD_1N_N(num) {
  // Проходимся с конца
  for (var i = num.n - 1; i >= 0; i--) {
    // Если не 9 - просто прибавляем 1
    if (num.a[i] != 9) {
      num.a[i]++;
      break;
    } else num.a[i] = 0; // Девятки обнуляем

  } // Если все цифры были девятками, создаем единичку


  if (i < 0) num.a.unshift(1);
  return num;
}

function SUB_NN_N(num1, num2) {
  var result = new Natural(0);
  if (COM_NN_D(num1, num2) == 1) return "Ошибка: вычитаемое больше уменьшаемого";else {
    // Если вычитаемое больше или равно уменьшаемому
    var i = num1.n - 1;
    result.a[i] = 0;

    while (i >= num1.n - num2.n) {
      if (num1.a[i] + result.a[i] >= num2.a[i - (num1.n - num2.n)]) {
        result.a[i] = num1.a[i] - num2.a[i - (num1.n - num2.n)] + result.a[i];
        result.a[i - 1] = 0;
      } else {
        result.a[i] = num1.a[i] + 10 - num2.a[i - (num1.n - num2.n)] + result.a[i];
        result.a[i - 1] = -1;
      }

      i--;
    } // Нашли последние n.num2 цифр разности


    if (num2.n != num1.n) {
      while (i >= 0) {
        if (result.a[i] == -1 && num1.a[i] == 0) {
          result.a[i] = result.a[i] + 10;
          result.a[i - 1] = -1;
        } else {
          result.a[i] = result.a[i] + num1.a[i];
          result.a[i - 1] = 0;
        }

        i--;
      } // Нашли цифры разности со второй по num1.n - (num2.n+1)

    }
  }
  result.delLeadingZeros();
  return result;
}

function MUL_Nk_N(num, k) {
  if (!Number.isSafeInteger(+k)) return "Ошибка: недопустимое значение k";
  if (num.n > 0) while (k--) {
    num.a.push(0);
  }
  return num;
}

function DIV_NN_Dk(num1, num2) {
  var comp = COM_NN_D(num1, num2);
  if (comp == 1) return "Ошибка: первое число больше второго";else if (comp == 0) return {
    d: 1,
    k: 0
  };
  var orderDiff = num1.n - num2.n;
  if (num1.a[0] <= num2.a[0]) orderDiff--;
  MUL_Nk_N(num2, orderDiff);
  var result = 0;

  while (COM_NN_D(num1, num2) != 1) {
    num1 = SUB_NN_N(num1, num2);
    result++;
  }

  return {
    d: result,
    k: orderDiff
  };
}

function ABS_Z_N(num) {
  num.b = false;
  return new Natural(num);
}

function POZ_Z_D(num) {
  return num.n ? num.b ? 1 : 2 : 0;
}

function MUL_ZM_Z(num) {
  if (num.n == 0) return num;
  num.b = !num.b;
  return num;
}

function TRANS_N_Z(num) {
  return new Integer(num);
}

function TRANS_Z_N(num) {
  return ABS_Z_N(num);
}

function INT_Q_B(num) {
  return num.q.n == 1 && num.q.a[0] == 1 ? 0 : 1;
}

function TRANS_Z_Q(num) {
  return new Rational(num);
}

function TRANS_Q_Z(num) {
  if (num.q.n != 1 || num.q.a[0] != 1) return "Ошибка: знаменатель не равен 1";
  return new Integer(num.p);
}

function DER_P_P(poly) {
  // TODO: use big number arithmetics
  for (var i = 0; i <= poly.m; i++) {
    poly.c[i].p.a = (poly.c[i].p.a.join("") * (poly.m - i)).toString().split("");
  }

  poly.c.pop(); // degrade

  if (poly.c.m < 0) poly.c.push(new Rational(0));
  return poly;
}
//Умножение многочленов MUL_PP_P
//MUL_PQ_P Умножение многочлена на рациональное число
//MUL_Pxk_P Умножение многочлена на x^k
//ADD_PP_P Сложение многочленов
function MUL_PP_P(poly1, poly2) {
    var poly = new Polynomial();
    for (let i = 0; i <= poly2.m; i++) {
        var tempPoly = new Polynomial();
        tempPoly = MUL_PQ_P(poly1, new Rational(poly2.c[i].a));
        tempPoly = MUL_Pxk_P(tempPoly, poly2.m - i);
        poly = ADD_PP_P(poly, tempPoly);
    }
    return poly;
}

//Частное от деления многочлена на многочлен при делении с остатком DIV_PP_P
//DIV_QQ_Q Вычитание дробей
//DEG_P_N Степень многочлена
//MUL_Pxk_P Умножение многочлена на x^k
//SUB_PP_P Вычитание многочленов
//ADD_PP_P 	Сложение многочленов
function DIV_PP_P(poly1, poly2) {
    var poly = new Polynomial();
    while (DEG_P_N(poly1) >= DEG_P_N(poly2)) {
        var tempPoly = new Polynomial();
        var x = DIV_QQ_Q(new Rational(poly1.c[i].a), new Rational(poly2.c[poly2.m].a));
        var k = poly1.m - 1;
        poly.push(new Rational(x));
        tempPoly = MUL_PQ_P(poly1, new Rational(poly2.c[i].a));
        tempPoly = MUL_Pxk_P(tempPoly, poly2.m - i);
        poly1 = SUB_PP_P(poly1, tempPoly);
    }
    return poly;
}

//Остаток от деления многочлена на многочлен при делении с остатком MOD_PP_P
//DIV_PP_P Частное от деления многочлена на многочлен при делении с остатком
//MUL_PP_P Умножение многочленов
//SUB_PP_P Вычитание многочленов
function MOD_PP_P(poly1, poly2) {
    var tempPoly = DIV_PP_P(poly1, poly2);
    if (tempPoly.m == 1 && tempPoly.c[0] == 0)
        return poly1;
    var int = MUL_PP_P(tempPoly, poly);
    var poly = SUB_PP_P(tempPoly, poly2);
    return poly;
}

function sss(num1, num2) {
    return ADD_ZZ_Z(num1, MUL_ZM_Z(num2));
}

function ADD_ZZ_Z(num1, num2) {
    if (POZ_Z_D(num1) == 2 && POZ_Z_D(num2) == 2) //???? ??? ?????????????
    {
        return ADD_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
    }
    else {
        if (POZ_Z_D(num1) == 1 && POZ_Z_D(num2) == 1) // ???? ???- ?????????????
        {
            return MUL_ZM_Z(ADD_NN_N(ABS_Z_N(num1), ABS_Z_N(num2))); // ?? ????? = - (|?1| + |?2|)

        }
        else {
            if (POZ_Z_D(num1) == 2 && POZ_Z_D(num2) == 1) // a1 ?????, ?2 ???
            {
                if (COM_NN_D(ABS_Z_N(num1), ABS_Z_N(num2)) == 1) // ???? Num1<num2
                {

                    return MUL_ZM_Z(SUB_NN_N(ABS_Z_N(num1), ABS_Z_N(num2))); // ???? |?1| < |?2|, ?? - (|?2| - |?1|)

                }
                else return SUB_NN_N(ABS_Z_N(num1), ABS_Z_N(num2)); // |a1| - |a2|

            }
            else {
                if (POZ_Z_D(num1) == 1 && POZ_Z_D(num2) == 2) // ?1 ???, ?2 ?????
                {
                    if (COM_NN_D(ABS_Z_N(num1), ABS_Z_N(num2)) == 2) {
                        return MUL_ZM_Z(SUB_NN_N(ABS_Z_N(num1), ABS_Z_N(num2))) // ???? |?1| > |?2| , ?? - (|A| - |B|)

                    }
                    else return SUB_NN_N(ABS_Z_N(num1), ABS_Z_N(num2)); //  |B| - |A|
                }
                else {
                    if (POZ_Z_D(num1) == 0) // if a1 == 0
                        return num2;
                    else if (POZ_Z_D(num2) == 0) // a2 == 0
                        return num1;
                }
            }

        }

    }
}

function MUL_ZZ_Z(num1, num2) {
    if ((POZ_Z_D(num1) == 1 && POZ_Z_D(num2) == 1) || (POZ_Z_D(num1) == 2 && POZ_Z_D(num2) == 2)) // åñëè ÷èñëà îäíîãî çíàêà
        return MUL_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));//ïðîñòî ïðîèçâåäåíèå
    else {
        if ((POZ_Z_D(num1) == 1 && POZ_Z_D(num2) == 2) || (POZ_Z_D(num1) == 1 && POZ_Z_D(num2) == 2))//åñëè ðàçíûõ çíàêîâ
        {
            return MUL_ZM_Z(MUL_NN_N(ABS_Z_N(num1), ABS_Z_N(num2)));	//ïðîèçâåäåíèå*(-1)
        }
        else {
            if (POZ_Z_D(num1) == 0 || POZ_Z_D(num2) == 0) // Åñëè ÷èñåëêè = 0
                return 0;
        }
    }

}

function MOD_ZZ_Z(num1, num2) {
    return MOD_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
}


function DIV_ZZ_Z(num1, num2) {
    if (POZ_Z_D(num1) == POZ_Z_D(num2))//???? ?????? ?????
        return DIV_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
    else //?????? ??????
    {
        return MUL_ZM_Z(DIV_NN_N(ABS_Z_N(num1), ABS_Z_N(num2)));
    }
}