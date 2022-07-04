export const form1 = {
  name: "FORM 1",
  key: 1,
  infos: [
    {
      title: "雇用契約期間の定め",
      key: 1,
      isDifferentBox: true,
      content: [
        {
          key: 1,
          value: "契約期間の定め：なし",
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "勤務地",
      key: 2,
      isDifferentBox: true,
      content: [
        {
          key: 1,
          value: `事業所名\nテキストテキストテキストテキストテキスト`,
          haveContainerBox: true,
        },
        {
          key: 2,
          value: `事業所在地 \nテキストテキストテキストテキストテキストテキスト`,
          haveContainerBox: true,
        },
        {
          key: 3,
          value: "仕事内容 \nテキストテキストテキストテキストテキストテキスト",
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "勤務条件",
      key: 3,
      isDifferentBox: true,
      content: [
        {
          key: 1,
          value: `勤務区分\n固定勤務`,
          haveContainerBox: true,
        },
        {
          key: 2,
          value:
            "勤務開始時間:09:00 勤務終了時間:18:00 休憩時間:120分 \n1週間の勤務日数 (1ヶ月平均 :5日 休日：土日祝日、年末年始",
          haveContainerBox: true,
        },
        {
          key: 3,
          value:
            "所定労働時間 (1日) :8時間 所定労働時間 (1週間平均) :40時間\n労働時間選択区分 :40時間",
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "報酬条件",
      key: 4,
      isDifferentBox: true,
      content: [
        {
          key: 1,
          value: `等級\n1等級`,
          haveContainerBox: true,
        },
        {
          key: 2,
          value: "基本給:200,000円 年齢給:200,000円 職能給:200,000円",
          haveContainerBox: true,
        },
        {
          key: 3,
          value: "調整給:200,000円 調整給1:200,000円 調整給2:200,000円",
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "手当",
      isDifferentBox: false,
      key: 5,
      content: [
        {
          key: 1,
          value: "ライフプラン手当：200,000円",
          haveContainerBox: true,
        },
        {
          value:
            "役職手当：200,000円　役職手当2：200,000円　役職手当3：200,000円",
          haveContainerBox: true,
        },
        {
          value:
            "資格手当：200,000円　住宅地域手当：200,000円　管理薬剤師手当：200,000円",
          haveContainerBox: true,
        },
        {
          value:
            "職務手当：200,000円　職務手当2：200,000円　職務手当3：200,000円",
          haveContainerBox: true,
        },
        {
          value:
            "ブロック手当：200,000円　フィールドマネジャー手当：200,000円　",
          haveContainerBox: true,
        },
        {
          value: "単身赴任手当：200,000円　社員区分手当：200,000円　",
          haveContainerBox: true,
        },
        {
          value: "合計支給額 \n200,000円 ",
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "賃金の締日・支払日",
      key: 6,
      isDifferentBox: true,
      content: [
        {
          value: `賃金締日：毎月末日 賃金支払日：当月25日`,
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "制度",
      key: 7,
      isDifferentBox: true,
      content: [
        {
          value: `昇給：あり 賞与：あり 退職金：あり`,
          haveContainerBox: true,
        },
        {
          value: `健康保険：加入する 厚生年金保険：加入する 雇用保険：加入する`,
          haveContainerBox: true,
        },
        {
          value: `定年制：あり 再雇用制度：ある 契約の更新：あり`,
          haveContainerBox: true,
        },
      ],
    },
    {
      title: "誓約書",
      key: 8,
      isDifferentBox: true,
      content: [
        {
          value: `
１ 私は アイングループ（以下 「 会社 」 という。）の就業規則等の諸規則・\n     諸規定を遵守し、誠実に職務に従事いたします'。
２  履歴書およびその他の提出書類の記載事項は事実に相違ありません。
３  貴社の社員としての体面を汚すような行為はいたしません。
４  会社 の業務 に関連して知りえた個人情報、企業情報（取引先・患者様・
    お客様 に関する情報、人事・財務・関連会社・紛争に関する情報、その他会
    社が秘密として指定する情報を含む。）、については、在職中はもとよりの
    こと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に      
    開示するなど漏洩いたしません。
５  会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・
    資料・帳簿等（フロッピー、ＭＯその他記録媒体の如何を問わない。）は、
    情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、
    会社退職時には、これら総てを会社に返還いたします。
６  職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして
    自ら使用し、又は第三者に開示・漏洩いたしません。
７  故意または重大な過失により貴社に損害を及ぼしたときは、その損害につい
    て賠償の責任を負います。
`,
          haveContainerBox: true,
        },
      ],
    },
  ],
  checkBoxes: [
    {
      title: "",
      key: 1,
      required: true,
      value: false,
      content: "同意する場合はチェックをしてください",
    },
  ],
};
