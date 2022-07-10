export const form2 = [
  { name: "FORM 2" },
  { key: 2 },
  {
    photoBoxes: [
      {
        title: "顔写真の登録",
        isDifferentBox: false,
        required: false,
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
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
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 1,
        description:
          "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
        input: [
          {
            title: "姓",
            key: 1,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名",
            key: 2,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 4,
              isShow: false,
              message: "",
            },
          },
          {
            title: "セイ",
            key: 3,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 6,
              isShow: false,

              message: "",
            },
          },
          {
            title: "メイ",
            key: 4,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 4,
              isShow: false,
              message: "",
            },
          },
          {
            title: "姓（ローマ字）",
            key: 5,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 5,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名（ローマ字）",
            key: 6,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 6,
              isShow: false,
              message: "",
            },
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 2,
        description: "",
        input: [
          {
            title: "ビジネスネーム",
            key: 7,
            required: false,
            value: "",
            description: "雇用保険被保険者番号",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    infos: [
      {
        title: "最終学歴",
        key: 1,
        isDifferentBox: true,
        content: [
          {
            key: 1,
            value:
              "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
          },
        ],
      },
    ],
  },
  {
    dateSelectBoxes: [
      {
        title: "学歴",
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
    selectOptions: [
      {
        title: "学歴区分",
        isDifferentBox: false,
        key: 1,
        value: [],
        options: [
          {
            name: "Trung Cấp",
            checked: "",
            id: "Trung Cấp",
            key: 1,
          },
          {
            name: "Cao Đẳng",
            checked: "",
            id: "Cao Đẳng",
            key: 2,
          },
          {
            name: "Đại Học",
            checked: "",
            id: "Đại Học",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    searchAndSelect: [
      {
        title: "学校名",
        isDifferentBox: false,
        required: true,
        key: 1,
        options: [
          {
            name: "option 1",
            code: "op1",
          },
          {
            name: "option 2",
            code: "op2",
          },
          {
            name: "option 3",
            code: "op3",
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 3,
        description: "",
        input: [
          {
            title: "学部名",
            key: 8,
            required: false,
            value: "",
            placeholder:
              "入力してください - this place have button right below",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: "保険年金",
        isDifferentBox: true,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 4,
        description: "",
        input: [
          {
            title: "基礎年金番号",
            key: 9,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "雇用保険被保険者番号",
            key: 10,
            required: false,
            value: "",
            description: "番号をお持ちの方は必ず入力してください",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "前職会社名",
            key: 11,
            required: false,
            value: "",
            description: "雇用保険番号が不明の場合は入力をしてください",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    photoBoxes: [
      {
        title: "資格証明書類（年金手帳）    ",
        isDifferentBox: false,
        required: false,
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
        description: "年金手帳の写真を添付してください",
        imgSource: "../../assets/photo_import.png",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
      {
        title: "資格署名書類（雇用保険被保険者証）",
        isDifferentBox: false,
        required: false,
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
        description: "雇用保険被保険者証の写真を添付してください",
        imgSource: "",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
    ],
  },
  {
    radioBoxes: [
      {
        name: "確定拠出年金の利用希望",
        key: 1,
        required: false,
        options: [
          {
            id: "希望する",
            value: "希望する",
          },
          {
            id: "利用しない",
            value: "利用しない",
          },
        ],
      },
    ],
  },
  {
    searchAndSelect: [
      {
        //TODO: Make the big title
        title: "金融機関をフリーワードで検索",
        description: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
        isDifferentBox: true,
        required: true,
        key: 1,
        options: [
          {
            name: "option 1.2",
            code: "op1.2",
          },
          {
            name: "option 2.2",
            code: "op2.2",
          },
          {
            name: "option 3.2",
            code: "op3.2",
          },
        ],
      },
      {
        title: "支店名をフリーワードで検索",
        description: "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
        isDifferentBox: false,
        required: true,
        key: 2,
        options: [
          {
            name: "option 1.2",
            code: "op1.2",
          },
          {
            name: "option 2.2",
            code: "op2.2",
          },
          {
            name: "option 3.2",
            code: "op3.2",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: `口座預金科目 \n普通`,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 5,
        description: "",
        input: [
          {
            title: "口座番号（半角）",
            key: 12,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "口座名義（カタカナ）",
            key: 13,
            required: true,
            value: "",
            description: "本人名義に限ります",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    checkBoxes: [
      {
        title: "在留カード（外国籍の方はご記入ください）",
        key: 1,
        isDifferentBox: true,
        type: "checkbox",
        required: false,
        value: false,
        error: {
          type: "checkbox",
          key: 1,
          isShow: false,
          message: "",
        },
        content: "外国籍の方はチェックを入れてください",
      },
    ],
  },

  {
    textInputBoxes: [
      {
        // TODO: DISABLE THESE
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: "",
        input: [
          {
            title: "姓（ローマ字）",
            key: 14,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名（ローマ字）",
            key: 15,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "姓（カナ）",
            key: 16,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名（カナ）",
            key: 17,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名（カナ）",
            key: 18,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "国籍",
            key: 19,
            required: true,
            value: "",
            description: "",
            placeholder: "選択してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "国籍",
        isDifferentBox: false,
        key: 2,
        value: [],
        options: [
          {
            name: "Viet Nam",
            checked: "",
            id: "Viet Nam",
            key: 1,
          },
          {
            name: "Nhat Ban",
            checked: "",
            id: "Nhat Ban",
            key: 2,
          },
          {
            name: "My",
            checked: "",
            id: "My",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "在留資格",
        isDifferentBox: false,
        key: 2,
        value: [],
        options: [
          {
            name: "Cu Tru 1",
            checked: "",
            id: "Cu Tru 1",
            key: 1,
          },
          {
            name: "Cu Tru 2",
            checked: "",
            id: "Cu Tru 2",
            key: 2,
          },
          {
            name: "Cu Tru 3",
            checked: "",
            id: "Cu Tru 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    dateSelectBoxes: [
      {
        title: "",
        key: "1",
        isDifferentBox: false,
        description: "",
        input: [
          {
            title: "在留期間（満了日）",
            id: "在留期間（満了日）",
            key: 1,
            required: false,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "資格外活動許可",
        isDifferentBox: false,
        key: 2,
        value: [],
        options: [
          {
            name: "Giay phep 1",
            checked: "",
            id: "Giay phep 1",
            key: 1,
          },
          {
            name: "Giay phep 2",
            checked: "",
            id: "Giay phep 2",
            key: 2,
          },
          {
            name: "Giay phep 3",
            checked: "",
            id: "Giay phep 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "就労区分",
        isDifferentBox: false,
        key: 2,
        value: [],
        options: [
          {
            name: "cong viec  1",
            checked: "",
            id: "cong viec 1",
            key: 1,
          },
          {
            name: "cong viec 2",
            checked: "",
            id: "cong viec 2",
            key: 2,
          },
          {
            name: "cong viec 3",
            checked: "",
            id: "cong viec 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        // TODO: DISABLE THESE
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 7,
        description: "",
        input: [
          {
            title: "在留カード番号（半角）",
            key: 20,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    photoBoxes: [
      {
        title: "在留カードの写真（表）    ",
        isDifferentBox: false,
        required: false,
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
        description: "カードの表の写真を添付してください。",
        imgSource: "../../assets/photo_import.png",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
      {
        title: "在留カードの写真（裏）",
        isDifferentBox: false,
        required: false,
        error: {
          type: "importPhoto",
          key: 1,
          isShow: Boolean,
          message: "",
        },
        description: "カードの裏の写真を添付してください。",
        imgSource: "",
        guide: `ファイルをドラッグ&ドロップ \n
ファイルをドロップするか、\n
ファイルを参照する`,
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "世帯主区分",
        isDifferentBox: true,
        required: true,
        key: 2,
        value: [],
        options: [
          {
            name: "chu Nha 1",
            checked: "",
            id: "chu Nha 1",
            key: 1,
          },
          {
            name: "chu Nha 2",
            checked: "",
            id: "chu Nha 2",
            key: 2,
          },
          {
            name: "chu Nha 3",
            checked: "",
            id: "chu Nha 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "住居区分",
        isDifferentBox: false,
        required: true,
        key: 2,
        value: [],
        options: [
          {
            name: "Phan Biet Cu Tru 1",
            checked: "",
            id: "Phan Biet Cu Tru 1",
            key: 1,
          },
          {
            name: "Phan Biet Cu Tru 2",
            checked: "",
            id: "Phan Biet Cu Tru 2",
            key: 2,
          },
          {
            name: "Phan Biet Cu Tru 3",
            checked: "",
            id: "Phan Biet Cu Tru 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    zipCodeBox: [
      {
        name: "郵便番号",
        key: 1,
        isDifferentBox: false,
        required: true,
        values: [
          {
            name: "-",
            value: "",
            placeholder: "半角",
          },
          {
            name: "",
            value: "",
            placeholder: "半角",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: "",
        input: [
          {
            title: "都道府県",
            key: 21,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "市区町村",
            key: 22,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "番地",
            key: 23,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "建物名称・部屋番号",
            key: 24,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "電話番号（半角）--required either",
            key: 25,
            required: true,
            value: "",
            description:
              "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "携帯電話番号（半角）--required either",
            key: 1,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    checkBoxes: [
      {
        title: "在留カード（外国籍の方はご記入ください）",
        key: 1,
        isDifferentBox: true,
        type: "checkbox",
        required: false,
        value: false,
        error: {
          type: "checkbox",
          key: 1,
          isShow: false,
          message: "",
        },
        content: "外国籍の方はチェックを入れてください",
      },
    ],
  },
  {
    zipCodeBox: [
      {
        name: "郵便番号",
        key: 1,
        isDifferentBox: false,
        required: true,
        values: [
          {
            name: "-",
            value: "",
            placeholder: "半角",
          },
          {
            name: "",
            value: "",
            placeholder: "半角",
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 1,
        description: "",
        input: [
          {
            title: "都道府県",
            key: 26,
            required: true,
            value: "",
            placeholder: "テキストテキス",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "市区町村",
            key: 27,
            required: true,
            value: "",
            placeholder: "テキストテキス",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "番地",
            key: 28,
            required: true,
            value: "",
            placeholder: "テキストテキス",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "建物名称・部屋番号",
            key: 29,
            required: false,
            value: "",
            placeholder: "テキストテキス",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    infos: [
      {
        title: "緊急連絡先を登録",
        key: 1,
        isDifferentBox: true,
        content: [
          {
            key: 1,
            value: `記入優先順位 
            ①一親等：実父母、義父母、別居の兄弟姉妹、配偶者、子 
            ②一親等の者の勤務先
            ③二親等：別居の実祖父母、義祖父母
            ④三親等：別居の叔父叔母、甥、姪。配偶者の兄弟姉妹
            ⑤知人、友人等`,
            haveContainerBox: false,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "関係姓",
        isDifferentBox: false,
        required: true,
        key: 1,
        value: [],
        options: [
          {
            name: "関係姓 1",
            checked: "",
            id: "関係姓 1",
            key: 1,
          },
          {
            name: "関係姓 2",
            checked: "",
            id: "関係姓 2",
            key: 2,
          },
          {
            name: "関係姓 3",
            checked: "",
            id: "関係姓 3",
            key: 3,
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 1,
        description: "",
        input: [
          {
            title: "姓",
            key: 30,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名",
            key: 31,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "セイ",
            key: 32,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "メイ",
            key: 33,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    zipCodeBox: [
      {
        name: "郵便番号",
        key: 1,
        isDifferentBox: false,
        required: true,
        values: [
          {
            name: "-",
            value: "",
            placeholder: "半角",
          },
          {
            name: "",
            value: "",
            placeholder: "半角",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: "",
        input: [
          {
            title: "都道府県",
            key: 34,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "市区町村",
            key: 35,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "番地",
            key: 36,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "建物名称・部屋番号",
            key: 37,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "電話番号（半角）--required either",
            key: 38,
            required: true,
            value: "",
            description:
              "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "携帯電話番号（半角）--required either",
            key: 39,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    infos: [
      {
        title: "家族情報を登録",
        key: 1,
        isDifferentBox: true,
        content: [
          {
            key: 1,
            value: `一等親以内は同居/別居に関わらず記入
二親等以上は同居、もしくは扶養義務がある場合に限り記載
            `,
            haveContainerBox: false,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "続柄",
        isDifferentBox: false,
        required: true,
        key: 1,
        value: [],
        options: [
          {
            name: "続柄 1",
            checked: "",
            id: "続柄 1",
            key: 1,
          },
          {
            name: "続柄 2",
            checked: "",
            id: "続柄 2",
            key: 2,
          },
          {
            name: "続柄 3",
            checked: "",
            id: "続柄 3",
            key: 3,
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
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 1,
        description: "",
        input: [
          {
            title: "姓",
            key: 40,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名",
            key: 41,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "セイ",
            key: 42,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "メイ",
            key: 43,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "姓（ローマ字）",
            key: 44,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
          },
          {
            title: "名（ローマ字）",
            key: 45,
            required: true,
            value: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 2,
              isShow: false,
              message: "",
            },
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
    radioBoxes: [
      {
        name: "同居/別居",
        description: "別居を選択すると住所の入力が必須になります",
        key: 1,
        required: true,
        options: [
          {
            id: "同居",
            value: "同居",
          },
          {
            id: "別居",
            value: "別居",
          },
        ],
      },
    ],
  },
  {
    zipCodeBox: [
      {
        name: "郵便番号",
        key: 1,
        isDifferentBox: false,
        required: true,
        values: [
          {
            name: "-",
            value: "",
            placeholder: "半角",
          },
          {
            name: "",
            value: "",
            placeholder: "半角",
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: "",
        input: [
          {
            title: "都道府県",
            key: 46,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "市区町村",
            key: 47,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "番地",
            key: 48,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "建物名称・部屋番号",
            key: 49,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "勤務先・学校名",
            key: 50,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "職業区分",
        isDifferentBox: false,
        key: 1,
        value: [],
        options: [
          {
            name: "職業区分 1",
            checked: "",
            id: "職業区分 1",
            key: 1,
          },
          {
            name: "職業区分 2",
            checked: "",
            id: "職業区分  2",
            key: 2,
          },
          {
            name: "職業区分 3",
            checked: "",
            id: " 職業区分 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: `職業区分でその他を選択の理由`,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: `その他を選択した方は、詳細内容を入力してください。学生を選択した方は、大学○年生など、具体的に入力をお願いいたします。`,
        input: [
          {
            title: "",
            key: 51,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "健康保険扶養区分",
        isDifferentBox: false,
        key: 1,
        value: [],
        options: [
          {
            name: "健康保険扶養区分 1",
            checked: "",
            id: "健康保険扶養区分 1",
            key: 1,
          },
          {
            name: "健康保険扶養区分 2",
            checked: "",
            id: "健康保険扶養区分  2",
            key: 2,
          },
          {
            name: "健康保険扶養区分 3",
            checked: "",
            id: " 健康保険扶養区分 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    numberInputBox: [
      {
        name: "扶養義務ありの場合は年収を登録してください",
        key: 1,
        isDifferentBox: false,
        required: false,
        values: [
          {
            name: "円",
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
        title: "通勤ルート",
        key: 1,
        isDifferentBox: true,
        content: [
          {
            key: 1,
            value: `経路が２つ以上ある場合は、運賃の安い方を選択してください。
            片道料金はICカード料金ではなく現金（切符）料金となります。`,
          },
        ],
      },
    ],
  },
  {
    selectOptions: [
      {
        title: "通勤手段",
        isDifferentBox: false,
        required: true,
        key: 1,
        value: [],
        options: [
          {
            name: "通勤手段 1",
            checked: "",
            id: "通勤手段 1",
            key: 1,
          },
          {
            name: "通勤手段 2",
            checked: "",
            id: "通勤手段  2",
            key: 2,
          },
          {
            name: "通勤手段 3",
            checked: "",
            id: " 通勤手段 3",
            key: 3,
          },
        ],
      },
    ],
  },
  {
    textInputBoxes: [
      {
        title: ``,
        isDifferentBox: false,
        validateRules: {
          max: 50,
          min: 1,
        },
        key: 6,
        description: ``,
        input: [
          {
            title: "出発地",
            key: 52,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "到着地",
            key: 53,
            required: true,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "",
            key: 54,
            required: false,
            value: "",
            description: "",
            placeholder: "合計交通費：0円",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
          {
            title: "備考",
            key: 55,
            required: false,
            value: "",
            description: "",
            placeholder: "入力してください",
            error: {
              type: "text",
              key: 1,
              isShow: false,
              message: "",
            },
          },
        ],
      },
    ],
  },
  {
    radioBoxes: [
      {
        name: "自家用車の通勤許可を申請しますか？",
        description: "",
        isDifferentBox: true,
        key: 1,
        required: true,
        options: [
          {
            id: "はい",
            value: "はい",
          },
          {
            id: "いいえ",
            value: "いいえ",
          },
        ],
      },
    ],
  },
  {
    radioBoxes: [
      {
        name: "自家用車の通勤許可を申請しますか？",
        description: "",
        isDifferentBox: true,
        key: 1,
        required: true,
        options: [
          {
            id: "はい",
            value: "はい",
          },
          {
            id: "いいえ",
            value: "いいえ",
          },
        ],
      },
    ],
  },
];
