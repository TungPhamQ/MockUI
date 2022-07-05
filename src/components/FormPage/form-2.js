export const form2 = [
  { name: "FORM 2" },
  { key: 2 },
  {
    photoBoxes: [
      {
        title: "顔写真の登録",
        isDifferentBox: false,
        required: false,
        description:
          "システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。",
        imgSource: "../../assets/photo_import.png",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
      {
        title: "本人確認書類",
        isDifferentBox: true,
        required: true,
        description: "運転免許証両面もしくは住民票を添付してください。",
        imgSource: "",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: "基本情報登録",
        isDifferentBox: true,

        key: 1,
        description:
          "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
        input: [
          {
            title: "姓",
            key: 1,
            required: true,
            placeholder: "入力してください",
          },
          {
            title: "名",
            key: 2,
            required: true,
            placeholder: "入力してください",
          },
          {
            title: "セイ",
            key: 3,
            required: true,
            placeholder: "入力してください",
          },
          {
            title: "メイ",
            key: 4,
            required: true,
            placeholder: "入力してください",
          },
          {
            title: "姓（ローマ字）",
            key: 5,
            required: true,
            placeholder: "入力してください",
          },
          {
            title: "名（ローマ字）",
            key: 6,
            required: true,
            placeholder: "入力してください",
          },
        ],
      },
    ],
  },
  {
    radioBoxes: [
      {
        name: "性別",
        key: 1,
        required: true,
        options: [
          {
            id: "男性",
            value: "男性",
          },
          {
            id: "女性",
            value: "女性",
          },
        ],
      },
    ],
  },
  {
    dateTextBox: [
      {
        name: "生年月日",
        key: 1,
        isDifferentBox: false,
        required: true,
        values: [
          {
            name: "年",
            value: "",
            placeholder: "西暦（半角）",
          },
          {
            name: "月",
            value: "",
            placeholder: "半角",
          },
          {
            name: "日",
            value: "",
            placeholder: "半角",
          },
        ],
      },
    ],
  },
  {
    infos: [
      {
        title: "年齢",
        key: 1,
        isDifferentBox: false,
        content: [
          {
            key: 1,
            value: "生年月日を入力すると表示されます",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: "",
        isDifferentBox: false,
        key: 1,
        description: "",
        input: [
          {
            title: "ビジネスネーム",
            key: 1,
            required: false,
            description: "旧姓を利用する等の場合に入力をしてください。",
            placeholder: "入力してください",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: "最終学歴",
        isDifferentBox: true,
        key: 1,
        description:
          "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
      },
    ],
  },
  {
    dateSelectBoxes: [
      {
        title: "学歴1",
        key: "1",
        isDifferentBox: false,
        description: "",
        input: [
          {
            title: "入学年月日",
            id: "入学年月日",
            key: 1,
            required: true,
          },
          {
            title: "卒業年月日",
            id: "卒業年月日",
            key: 2,
            required: true,
          },
        ],
      },
    ],
  },
  {
    multiSelect: [
      {
        title: "学歴区分",
        placeholder: "選択してください",
        data: [],
      },
    ],
  },
];
