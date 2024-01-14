// database.types.ts
export type Database = {
  public: {
    Tables: {
      emails: {
        Row: {
          // the data expected from .select()
          id: string;
          dkim: string;
          spf: string;
          to: string;
          email: string;
          charsets: string;
          sender_ip: string;
          from: string;
          subject: string;
          envelope: string;
          created_at: string;
          body_text?: string;
          body_text_2?: string;
          body_text_3?: string;
          voice_text_url?: string;
          voice_text_is_ready?: boolean;
          voice_task_id?: string;
        };
        Insert: {
          // the data to be passed to .insert()
          // id: string;
          dkim: string;
          spf: string;
          to: string;
          email: string;
          charsets: string;
          sender_ip: string;
          from: string;
          subject: string;
          envelope: string;
          created_at: string;
          body_text?: string;
          body_text_2?: string;
          body_text_3?: string;
          voice_text_url?: string;
          voice_text_is_ready?: boolean;
          voice_task_id?: string;
        };
        Update: {
          // the data to be passed to .update()
          id?: never;
          dkim: string;
          spf: string;
          to: string;
          email: string;
          charsets: string;
          sender_ip: string;
          from: string;
          subject: string;
          envelope: string;
          created_at: string;
          body_text?: string;
          body_text_2?: string;
          body_text_3?: string;
          voice_text_url?: string;
          voice_text_is_ready?: boolean;
          voice_task_id?: string;
        };
      };
    };
  };
  // define your type here
  // emails: {
  //   id: string;
  //   dkim: string;
  //   spf: string;
  //   to: string;
  //   email: string;
  //   charsets: string;
  //   sender_ip: string;
  //   from: string;
  //   subject: string;
  //   envelope: string;
  //   created_at: string;
  //   body_text?: string;
  //   body_text_2?: string;
  //   body_text_3?: string;
  //   voice_text_url?: string;
  //   voice_text_is_ready?: boolean;
  //   voice_task_id?: string;
  // };
};
