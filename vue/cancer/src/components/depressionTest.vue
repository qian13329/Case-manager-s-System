<template>
  <div>
    <div class="dataList">
      <div class="patientData">
        <div>身分證字號</div>
        <input type="text" class="textbox" v-model="pID" />
        <!-- <a>{{ $route.params.pID }}</a> -->
      </div>
      <div class="patientData">
        <div>檢測時間</div>
        <input type="date" class="textbox textbox-time" v-model="pDate" />
      </div>
    </div>

    <h2>
      <i>請您根據最近一星期內以來身體與情緒的真正感覺，勾選最符合的一項.ᐟ.ᐟ</i>
    </h2>
    <!-- <span>{{ result }}</span> -->

    <div class="questionList">
      <div class="question">1.我覺得心裡很難過。</div>
      <div class="questionRadio">
        <div>
          <input id="1" type="radio" name="Q1" value="0" v-model="score1" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="2" type="radio" name="Q1" value="1" v-model="score1" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="3" type="radio" name="Q1" value="2" v-model="score1" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="4" type="radio" name="Q1" value="3" v-model="score1" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>
    <div class="questionList">
      <div class="question">2.碰到事情，我只想逃避。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q2" value="0" v-model="score2" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q2" value="1" v-model="score2" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q2" value="2" v-model="score2" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q2" value="3" v-model="score2" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>
    <div class="questionList">
      <div class="question">3.我最近有自殺的念頭。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q3" value="0" v-model="score3" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q3" value="1" v-model="score3" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q3" value="2" v-model="score3" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q3" value="3" v-model="score3" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">4.我心裡覺得很空虛。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q4" value="0" v-model="score4" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q4" value="1" v-model="score4" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q4" value="2" v-model="score4" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q4" value="3" v-model="score4" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">5.沒有人了解我。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q5" value="0" v-model="score5" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q5" value="1" v-model="score5" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q5" value="2" v-model="score5" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q5" value="3" v-model="score5" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">6.我感到絕望。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q6" value="0" v-model="score6" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q6" value="1" v-model="score6" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q6" value="2" v-model="score6" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q6" value="3" v-model="score6" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">7.我覺得人生是灰暗的。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q7" value="0" v-model="score7" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q7" value="1" v-model="score7" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q7" value="2" v-model="score7" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q7" value="3" v-model="score7" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">8.我對原本喜歡的事，變得沒興趣了。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q8" value="0" v-model="score8" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q8" value="1" v-model="score8" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q8" value="2" v-model="score8" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q8" value="3" v-model="score8" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">9. 我的胸口會緊緊、悶悶的。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q9" value="0" v-model="score9" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q9" value="1" v-model="score9" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q9" value="2" v-model="score9" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q9" value="3" v-model="score9" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">10.我會掩飾心理的痛苦。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q10" value="0" v-model="score10" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q10" value="1" v-model="score10" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q10" value="2" v-model="score10" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q10" value="3" v-model="score10" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">11.我變得討厭自己。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q11" value="0" v-model="score11" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q11" value="1" v-model="score11" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q11" value="2" v-model="score11" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q11" value="3" v-model="score11" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">12.我是別人的負擔。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q12" value="0" v-model="score12" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q12" value="1" v-model="score12" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q12" value="2" v-model="score12" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q12" value="3" v-model="score12" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">13.我覺得很煩。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q13" value="0" v-model="score13" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q13" value="1" v-model="score13" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q13" value="2" v-model="score13" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q13" value="3" v-model="score13" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">14.我上課念書不能專心。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q14" value="0" v-model="score14" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q14" value="1" v-model="score14" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q14" value="2" v-model="score14" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q14" value="3" v-model="score14" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">15.我感到昏昏沉沉的。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q15" value="0" v-model="score15" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q15" value="1" v-model="score15" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q15" value="2" v-model="score15" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q15" value="3" v-model="score15" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">16.我覺得自己沒有未來。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q16" value="0" v-model="score16" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q16" value="1" v-model="score16" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q16" value="2" v-model="score16" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q16" value="3" v-model="score16" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">17.我認為自己做人失敗。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q17" value="0" v-model="score17" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q17" value="1" v-model="score17" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q17" value="2" v-model="score17" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q17" value="3" v-model="score17" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">18.我會莫名的想哭。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q18" value="0" v-model="score18" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q18" value="1" v-model="score18" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q18" value="2" v-model="score18" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q18" value="3" v-model="score18" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">19.我覺得日子痛苦難熬。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q19" value="0" v-model="score19" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q19" value="1" v-model="score19" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q19" value="2" v-model="score19" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q19" value="3" v-model="score19" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">20.我不想出門。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q20" value="0" v-model="score20" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q20" value="1" v-model="score20" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q20" value="2" v-model="score20" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q20" value="3" v-model="score20" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">21.我覺得生活沒有意義。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q21" value="0" v-model="score21" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q21" value="1" v-model="score21" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q21" value="2" v-model="score21" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q21" value="3" v-model="score21" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">22.我感到很寂寞。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q22" value="0" v-model="score22" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q22" value="1" v-model="score22" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q22" value="2" v-model="score22" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q22" value="3" v-model="score22" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">23.我對任何事都提不起勁。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q23" value="0" v-model="score23" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q23" value="1" v-model="score23" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q23" value="2" v-model="score23" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q23" value="3" v-model="score23" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">24.我覺得記憶力變差了。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q24" value="0" v-model="score24" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q24" value="1" v-model="score24" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q24" value="2" v-model="score24" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q24" value="3" v-model="score24" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">25.我會猶豫不決，很難做決定。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q25" value="0" v-model="score25" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q25" value="1" v-model="score25" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q25" value="2" v-model="score25" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q25" value="3" v-model="score25" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">26.我覺得自己是沒有價值的人。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q26" value="0" v-model="score26" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q26" value="1" v-model="score26" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q26" value="2" v-model="score26" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q26" value="3" v-model="score26" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">27.沒有人關心我。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q27" value="0" v-model="score27" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q27" value="1" v-model="score27" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q27" value="2" v-model="score27" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q27" value="3" v-model="score27" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">28.我不快樂。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q28" value="0" v-model="score28" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q28" value="1" v-model="score28" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q28" value="2" v-model="score28" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q28" value="3" v-model="score28" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">29.我會想要傷害自己。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q29" value="0" v-model="score29" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q29" value="1" v-model="score29" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q29" value="2" v-model="score29" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q29" value="3" v-model="score29" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">30.我會一直發呆。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q30" value="0" v-model="score30" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q30" value="1" v-model="score30" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q30" value="2" v-model="score30" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q30" value="3" v-model="score30" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">31.我不想和別人交談。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q31" value="0" v-model="score31" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q31" value="1" v-model="score31" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q31" value="2" v-model="score31" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q31" value="3" v-model="score31" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="questionList">
      <div class="question">32.我想自己躲起來。</div>
      <div class="questionRadio">
        <div>
          <input id="" type="radio" name="Q32" value="0" v-model="score32" />
          <label> 沒有或極少（1天以下）0分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q32" value="1" v-model="score32" />
          <label>有時候（1～2天）1分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q32" value="2" v-model="score32" />
          <label> 時常（3～4天）2分</label>
        </div>
        <div>
          <input id="" type="radio" name="Q32" value="3" v-model="score32" />
          <label> 常常、總是（5～7天）3分</label>
        </div>
      </div>
    </div>

    <div class="tableBn">
      <button class="bnTable" @click="handleSubmit()">送出</button>
    </div>
    <span>{{ score }}</span>
  </div>
</template>

<script>
import { insertDetection } from "../services/api.js";
import Cookies from "js-cookie";
import { set } from "vue";

// import depressionTestList from "../data/depressionTestList.json";

export default {
  data() {
    return {
      s: 0,
      // result:0,
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      score5: 0,
      score6: 0,
      score7: 0,
      score8: 0,
      score9: 0,
      score10: 0,
      score11: 0,
      score12: 0,
      score13: 0,
      score14: 0,
      score15: 0,
      score16: 0,
      score17: 0,
      score18: 0,
      score19: 0,
      score20: 0,
      score21: 0,
      score22: 0,
      score23: 0,
      score24: 0,
      score25: 0,
      score26: 0,
      score27: 0,
      score28: 0,
      score29: 0,
      score30: 0,
      score31: 0,
      score32: 0,
      id: "",
      pID: this.$route.params.pID,
      pDate: "",
      token: "",
    };
  },
  props: {
    item: Object,
  },

  computed: {
    score: {
      get: function () {
        this.s =
          parseFloat(this.score1) +
          parseFloat(this.score2) +
          parseFloat(this.score3) +
          parseFloat(this.score4) +
          parseFloat(this.score5) +
          parseFloat(this.score6) +
          parseFloat(this.score7) +
          parseFloat(this.score8) +
          parseFloat(this.score9) +
          parseFloat(this.score10) +
          parseFloat(this.score11) +
          parseFloat(this.score12) +
          parseFloat(this.score13) +
          parseFloat(this.score14) +
          parseFloat(this.score15) +
          parseFloat(this.score16) +
          parseFloat(this.score17) +
          parseFloat(this.score18) +
          parseFloat(this.score19) +
          parseFloat(this.score20) +
          parseFloat(this.score21) +
          parseFloat(this.score22) +
          parseFloat(this.score23) +
          parseFloat(this.score24) +
          parseFloat(this.score25) +
          parseFloat(this.score26) +
          parseFloat(this.score27) +
          parseFloat(this.score28) +
          parseFloat(this.score29) +
          parseFloat(this.score30) +
          parseFloat(this.score31) +
          parseFloat(this.score32);
        return this.s;
      },
      set: function () {},
    },
  },
  methods: {
    handleSubmit() {
      insertDetection({
        score: this.score,
        pID: this.pID,
        pDate: this.pDate,
        token: this.token,
      }).then(() => {
        this.score = "";
        this.pID = "";
        this.pDate = "";
        if (this.score <= 28) {
          alert(
            "總分：" +
              this.score +
              "分\n\n你現在的情緒大致穩定，沒有明顯的憂鬱情緒，通常可以處理生活上的壓力，建議你繼續保持良好的心情。"
          );
        } else if (this.score >= 29 && this.score <= 35) {
          alert(
            "總分：" +
              this.score +
              "分\n\n你現在的情緒大致穩定，沒有明顯的憂鬱情緒，通常可以處理生活上的壓力，建議你繼續保持良好的心情。"
          );
        } else if (this.score >= 36 && this.score <= 51) {
          alert(
            "總分：" +
              this.score +
              "分\n\n是不是已經持續一陣子(超過兩星期)情緒低落、悶悶的、不想和別人交談？你的憂鬱程度已經蠻高了，一肚子苦惱與煩悶，連朋友也不知該如何幫你，可以與輔導老師、心理師或醫師聊聊，進一步了解自己是否需要專業的協助。"
          );
        } else {
          alert(
            "總分：" +
              this.score +
              "分\n\n你的心情持續低落？愁眉不展？只想一個人獨處？變得什麼都不想做？甚至對未來覺得無助或絕望？你的心已經感冒，心病需要心藥醫，趕緊到醫院找專業及可信賴的醫生檢查，透過他們的診斷與治療，你將不再覺得孤單、無助！"
          );
        }
        // 重整頁面
        this.$router.go(0);
        // 跳至最上方
        window.scrollTo(0, 0);
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
  },
};
</script>

<style scoped>
.tableBn {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.bnTable {
  /* margin-left: 2%; */
  font-size: 20px;
  color: #ffffff;
  font-weight: bolder;
  text-align: center;
  width: 90px;
  height: 35px;
  border: 0;
  background-color: #859a75;
  border-radius: 10px;
}

.bnTable:hover {
  background-color: #a7b59d;
}
/* 電腦 */
@media screen and (min-width: 1025px) {
  .dataList {
    max-width: 900px;
    margin: 40px auto;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 30px;
  }

  .textbox {
    width: 200px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  .questionList {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
    max-width: 1000px;
  }

  .question {
    font-size: 24px;
    margin: 15px 0;
  }

  .questionRadio {
    font-size: 18px;
  }

  .questionRadio div {
    margin: 10px 0;
    padding: 15px;
    background-color: #ece9db;
    border-radius: 10px;
    height: 35px;
    display: flex;
    align-items: center;
  }

  .questionRadio input[type="radio"] {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .dataList {
    width: 95%;
    max-width: 800px;
    margin: 40px auto;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 25px;
  }

  .textbox {
    width: 180px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }
  .questionList {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
    max-width: 850px;
  }

  .question {
    font-size: 22px;
    margin: 15px 0;
  }

  .questionRadio {
    font-size: 18px;
  }

  .questionRadio div {
    margin: 10px 0;
    padding: 15px;
    background-color: #ece9db;
    border-radius: 10px;
    height: 35px;
    display: flex;
    align-items: center;
  }

  .questionRadio input[type="radio"] {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .dataList {
    width: 95%;
    max-width: 700px;
    margin: 40px auto;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
  }

  .textbox {
    width: 130px;
    height: 28px;
    margin-left: 10px;
    font-size: 16px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }
  .questionList {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
    max-width: 650px;
  }

  .question {
    font-size: 20px;
    margin: 15px 0;
  }

  .questionRadio {
    font-size: 16px;
  }

  .questionRadio div {
    margin: 10px 0;
    padding: 15px;
    background-color: #ece9db;
    border-radius: 10px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  .questionRadio input[type="radio"] {
    margin-right: 10px;
  }
}

/* 手機 */
@media screen and (max-width: 550px) {
  .dataList {
    width: 320px;
    height: 100px;
    margin: 30px auto;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 120px;
    height: 28px;
    margin-left: 10px;
    font-size: 14px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .textbox-time {
    margin-left: 27px;
  }

  h2 {
    font-size: 16px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 40px;
  }
  .questionList {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    width: 85%;
    max-width: 400px;
  }

  .question {
    font-size: 18px;
    margin: 15px 0;
  }

  .questionRadio {
    font-size: 14px;
  }
  .questionRadio div {
    margin: 10px 0;
    padding: 15px;
    background-color: #ece9db;
    border-radius: 10px;
    height: 28px;
    display: flex;
    align-items: center;
  }

  .questionRadio input[type="radio"] {
    margin-right: 10px;
  }
}
</style>