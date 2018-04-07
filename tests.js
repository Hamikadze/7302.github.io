'use strict';

function runTests() {
  var testNum = -1;

  // Test handler
  function th(success) {
    testNum++;

    if (!success) {
      printResult('Тест ' + testNum + ' не пройден! (см. консоль)');
      console.error('Test #' + testNum);
      console.trace();
    }
  }

  var timeBeforeTests = performance.now();

  th(false); // Намеренный фейл для демонстрации работы тестов

  try {
    // Проверка, что все функции из таблицы присутсвуют в коде
    var assert = true;
    for(var moduleName in Modules)
      if(moduleName !== 'def' && typeof window[moduleName] !== 'function')
        assert = false;
    th(assert);

    // Тесты множеств
    th(new Natural('0') == '0');
    th(new Natural('0').n === 0);
    th(new Natural('123') == '123');
    th(new Natural('123').n === 3);
    th(new Natural(0) == '0');
    th(new Natural(123) == '123');
    th(new Natural([1, 2, 3]) == '123');
    th(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890') == '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    th(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890').n === 440);
    th(new Integer('0') == '0');
    th(new Integer('-1') == '-1');
    th(new Integer('-123') == '-123');
    th(new Integer('-123').n === 3);
    th(new Integer(['-', 1, 2, 3]) == '-123');
    th(new Integer(['-', '1', '2', '3']) == '-123');
    th(new Integer(-1) == '-1');
    th(new Integer(-123) == '-123');
    th(new Integer(new Natural('123')) == '123');
    th(new Rational('0') == '0/1');
    th(new Rational('123') == '123/1');
    th(new Rational('0/1') == '0/1');
    th(new Rational('123/321') == '123/321');
    th(new Rational('-123/321') == '-123/321');
    th(new Rational('-123/321').p == '-123');
    th(new Rational('-123/321').q == '321');
    th(new Rational(new Integer('-123'), new Natural('321')) == '-123/321');
    th(new Polynomial('0') == '0');
    th(new Polynomial('11') == '11');
    th(new Polynomial('11 22') == '11x¹+22');
    th(new Polynomial('11 22 33') == '11x²+22x¹+33');
    th(new Polynomial('11 0 33') == '11x²+33');
    th(new Polynomial('0 0 33') == '33');
    th(new Polynomial('11 0 0 44 0 66') == '11x⁵+44x²+66');
    th(new Polynomial([1, 2, 3]) == 'x²+2x¹+3');
    th(new Polynomial('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242') == '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890x+424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242');

    // Тесты модулей
    //N1
    th(COM_NN_D(new Natural(0), new Natural(0)) == 0);
    th(COM_NN_D(new Natural(7), new Natural(42)) == 1);
    th(COM_NN_D(new Natural(42), new Natural(7)) == 2);
    //N2
    th(NZER_N_B(new Natural(0)) == 0);
    th(NZER_N_B(new Natural(42)) == 1);
    //N3
    th(ADD_1N_N(new Natural(0)) == '1');
    th(ADD_1N_N(new Natural(19)) == '20');
    th(ADD_1N_N(new Natural(999)) == '1000');
    //N4
    th(ADD_NN_N(new Natural(0), new Natural(0)) == '0');
    th(ADD_NN_N(new Natural(1), new Natural(0)) == '1');
    th(ADD_NN_N(new Natural(0), new Natural(1)) == '1');
    th(ADD_NN_N(new Natural(42), new Natural(7)) == '49');
    th(ADD_NN_N(new Natural(99), new Natural(99)) == '198');
    //N5
    th(SUB_NN_N(new Natural(1), new Natural(0)) == '1');
    th(SUB_NN_N(new Natural(42), new Natural(7)) == '35');
    th(SUB_NN_N(new Natural(42), new Natural(42)) == '0');
    th(SUB_NN_N(new Natural(321), new Natural(123)) == '198');
    th(SUB_NN_N(new Natural(555), new Natural(99)) == '456');
    //N6
    th(MUL_ND_N(new Natural(0), 0) == '0');
    th(MUL_ND_N(new Natural(0), 3) == '0');
    th(MUL_ND_N(new Natural(123), 0) == '0');
    th(MUL_ND_N(new Natural(1), 9) == '9');
    th(MUL_ND_N(new Natural(123), 9) == '1107');
    th(MUL_ND_N(new Natural(999), 9) == '8991');
    th(MUL_ND_N(new Natural(555), 5) == '2775');
    th(MUL_ND_N(new Natural(123), 1) == '123');
    //N7
    th(MUL_Nk_N(new Natural(0), 10) == '0');
    th(MUL_Nk_N(new Natural(1), 10) == '10000000000');
    th(MUL_Nk_N(new Natural(123), 0) == '123');
    th(MUL_Nk_N(new Natural(123), 1) == '1230');
    th(MUL_Nk_N(new Natural(123), 100000) == '123' + '0'.repeat(100000));
    //N8
    th(MUL_NN_N(new Natural(0), new Natural(0)) == '0');
    th(MUL_NN_N(new Natural(123), new Natural(0)) == '0');
    th(MUL_NN_N(new Natural(0), new Natural(123)) == '0');
    th(MUL_NN_N(new Natural(999), new Natural(9)) == '8991');
    th(MUL_NN_N(new Natural(12), new Natural(12)) == '144');
    th(MUL_NN_N(new Natural(999), new Natural(999)) == '998001');
    //N9
    th(SUB_NDN_N(new Natural(0), 0, new Natural(0)) == '0');
    th(SUB_NDN_N(new Natural(123), 0, new Natural(123)) == '123');
    th(SUB_NDN_N(new Natural(123), 123, new Natural(0)) == '123');
    th(SUB_NDN_N(new Natural(123), 1, new Natural(123)) == '0');
    th(SUB_NDN_N(new Natural(123), 5, new Natural(5)) == '98');
    th(SUB_NDN_N(new Natural(42), 2, new Natural(20)) == '2');
    //N10
    th(DIV_NN_Dk(new Natural(42), new Natural(42)).d == '1');
    th(DIV_NN_Dk(new Natural(42), new Natural(42)).k == '0');
    th(DIV_NN_Dk(new Natural(123), new Natural(20)).d == '6');
    th(DIV_NN_Dk(new Natural(123), new Natural(20)).k == '0');
    th(DIV_NN_Dk(new Natural(123), new Natural(33)).d == '3');
    th(DIV_NN_Dk(new Natural(123), new Natural(33)).k == '0');
    th(DIV_NN_Dk(new Natural(113), new Natural(112)).d == '1');
    th(DIV_NN_Dk(new Natural(113), new Natural(112)).k == '0');
    th(DIV_NN_Dk(new Natural(1000000), new Natural(3)).d == '3');
    th(DIV_NN_Dk(new Natural(1000000), new Natural(3)).k == '5');
    th(DIV_NN_Dk(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'), new Natural(3)).d == 4);
    th(DIV_NN_Dk(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'), new Natural(3)).k == 438);
    //N10-formatter
    th(Modules.DIV_NN_Dk.formatter(DIV_NN_Dk(new Natural(1000000), new Natural(3))) == '3*10⁵');
    //N11
    th(DIV_NN_N(new Natural(123), new Natural(123)) == '1');
    th(DIV_NN_N(new Natural(123), new Natural(20)) == '6');
    th(DIV_NN_N(new Natural(123), new Natural(2)) == '61');
    th(DIV_NN_N(new Natural(42), new Natural(20)) == '2');
    //N12
    th(MOD_NN_N(new Natural(123), new Natural(123)) == '0');
    th(MOD_NN_N(new Natural(123), new Natural(20)) == '3');
    th(MOD_NN_N(new Natural(123), new Natural(2)) == '1');
    th(MOD_NN_N(new Natural(42), new Natural(20)) == '2');
    //N13
    th(GCF_NN_N(new Natural(123), new Natural(123)) == '123');
    th(GCF_NN_N(new Natural(42), new Natural(17)) == '1');
    th(GCF_NN_N(new Natural(123), new Natural(42)) == '3');
    th(GCF_NN_N(new Natural(15), new Natural(5)) == '5');
    th(GCF_NN_N(new Natural(5), new Natural(15)) == '5');
    //N14
    th(LCM_NN_N(new Natural(123), new Natural(123)) == '123');
    th(LCM_NN_N(new Natural(42), new Natural(17)) == '714');
    th(LCM_NN_N(new Natural(123), new Natural(42)) == '1722');
    th(LCM_NN_N(new Natural(15), new Natural(5)) == '15');
    th(LCM_NN_N(new Natural(5), new Natural(15)) == '15');
    //Z1
    th(ABS_Z_N(new Integer(0)) == '0');
    th(ABS_Z_N(new Integer(-1)) == '1');
    th(ABS_Z_N(new Integer(-42)) == '42');
    //Z2
    th(POZ_Z_D(new Integer(0)) == 0);
    th(POZ_Z_D(new Integer(-1)) == 1);
    th(POZ_Z_D(new Integer(42)) == 2);
    //Z3
    th(MUL_ZM_Z(new Integer(0)) == '0');
    th(MUL_ZM_Z(new Integer(-1)) == '1');
    th(MUL_ZM_Z(new Integer(42)) == '-42');
    //Z4
    th(TRANS_N_Z(new Natural(42)) == '42');
    //Z5
    th(TRANS_Z_N(new Integer(42)) == '42');
    //Z6
    th(ADD_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(ADD_ZZ_Z(new Integer(42), new Integer(1)) == '43');
    th(ADD_ZZ_Z(new Integer(1), new Integer(42)) == '43');
    th(ADD_ZZ_Z(new Integer(42), new Integer(17)) == '59');
    th(ADD_ZZ_Z(new Integer(442), new Integer(442)) == '884');
    th(ADD_ZZ_Z(new Integer(999), new Integer(999)) == '1998');
    //Z7
    th(SUB_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(SUB_ZZ_Z(new Integer(0), new Integer(1)) == '-1');
    th(SUB_ZZ_Z(new Integer(1), new Integer(0)) == '1');
    th(SUB_ZZ_Z(new Integer(42), new Integer(17)) == '25');
    th(SUB_ZZ_Z(new Integer(17), new Integer(42)) == '-25');
    th(SUB_ZZ_Z(new Integer(42), new Integer(9999)) == '-9957');
    //Z8
    th(MUL_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(MUL_ZZ_Z(new Integer(0), new Integer(1)) == '0');
    th(MUL_ZZ_Z(new Integer(1), new Integer(0)) == '0');
    th(MUL_ZZ_Z(new Integer(42), new Integer(17)) == '714');
    th(MUL_ZZ_Z(new Integer(442), new Integer(442)) == '195364');
    th(MUL_ZZ_Z(new Integer(999), new Integer(777)) == '776223');
    //Z9
    //!!!
    //Z10
    //!!!
    //Q1
    //!!!
    //Q2
    th(INT_Q_B(new Rational('0/1')) == 0);
    th(INT_Q_B(new Rational('42/1')) == 0);
    th(INT_Q_B(new Rational('42/42')) == 1);
    th(INT_Q_B(new Rational('0/42')) == 1);
    //Q3
    th(TRANS_Z_Q(new Integer(-42)) == '-42/1');
    th(TRANS_Z_Q(new Integer(0)) == '0/1');
    //Q4
    th(TRANS_Q_Z(new Rational('-42/1')) == '-42');
    th(TRANS_Q_Z(new Rational('0/1')) == '0');
    //Q5
    //!!!
    //Q6
    //!!!
    //Q7
    //!!!
    //Q8
    //!!!
    //P1
    //!!!
    //P2
    //!!!
    //P3
    //!!!
    //P4
    //!!!
    //P5
    //!!!
    //P6
    //!!!
    //P7
    //!!!
    //P8
    //!!!
    //P9
    //!!!
    //P10
    //!!!
    //P11
    //!!!
    //P12
    th(DER_P_P(new Polynomial('42')) == '0');
    th(DER_P_P(new Polynomial('0 42')) == '0');
    th(DER_P_P(new Polynomial('1 0')) == '1');
    th(DER_P_P(new Polynomial('1 2 3 4 5')) == '4x³+6x²+6x¹+4');
    th(DER_P_P(new Polynomial('1 2 3 4 5')) == '4x³+6x²+6x¹+4');
    th(DER_P_P(new Polynomial('42 0 0 8 5')) == '168x³+8');
    //th(DER_P_P(new Polynomial('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 2 3')) == '24691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780x+2');
    //P13
    //!!!
  } catch (e) {
    printResult('Критическая ошибка: ' + e.message);
    console.error('Critical!');
    console.trace();
    console.info(e.stack);
  }

  printResult('Выполнено ' + testNum + ' тестов', performance.now() - timeBeforeTests);
}