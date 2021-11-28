export class ConsultationNote {
    constructor(
      public text_note?: string,
      public bp_systolic?: number,
      public bp_diastolic?: number,
      public diagnosis?: string,
      public procedure?: string
    ) {  }
  }