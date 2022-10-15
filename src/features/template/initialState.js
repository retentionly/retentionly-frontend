const initialValue = [
  {
    type: "paragaph",
    children: [{ text: "" }]
  }
];

const initialState = {
  name: "",
  image: "",
  subjectLine: initialValue,
  preview: initialValue,
  serviceDesc: initialValue,
  beneficiaryName: initialValue,
  beneficiaryHelped: initialValue,
  beneficiaryAfter: initialValue,
  beneficiaryBefore: initialValue,
  beneficiaryDesc: initialValue,
  donationGoesFor: initialValue,
  donationFor: initialValue,
  socialMediaBenefit: [],
  donationDoes: initialValue,
  mainGoalSummary: initialValue,
  impactStat: [],
  mainText: initialValue,
  social: {},
  slug: "",
  ref: "",
  uniqueID: "",
}

export default initialState