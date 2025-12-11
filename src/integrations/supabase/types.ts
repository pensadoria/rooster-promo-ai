export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          product_interest: string | null
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          product_interest?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          product_interest?: string | null
          status?: string
        }
        Relationships: []
      }
      forecast_metrics: {
        Row: {
          created_at: string | null
          cv_horizon: string | null
          cv_initial: string | null
          cv_period: string | null
          id: string
          mae: number | null
          mape: number | null
          model_id: string
          n_observacoes: number | null
          observacoes: string | null
          periodo_fim: string | null
          periodo_inicio: string | null
          product_id: string
          r2: number | null
          rmse: number | null
          wmape: number | null
        }
        Insert: {
          created_at?: string | null
          cv_horizon?: string | null
          cv_initial?: string | null
          cv_period?: string | null
          id?: string
          mae?: number | null
          mape?: number | null
          model_id: string
          n_observacoes?: number | null
          observacoes?: string | null
          periodo_fim?: string | null
          periodo_inicio?: string | null
          product_id: string
          r2?: number | null
          rmse?: number | null
          wmape?: number | null
        }
        Update: {
          created_at?: string | null
          cv_horizon?: string | null
          cv_initial?: string | null
          cv_period?: string | null
          id?: string
          mae?: number | null
          mape?: number | null
          model_id?: string
          n_observacoes?: number | null
          observacoes?: string | null
          periodo_fim?: string | null
          periodo_inicio?: string | null
          product_id?: string
          r2?: number | null
          rmse?: number | null
          wmape?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forecast_metrics_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: true
            referencedRelation: "forecast_model_performance"
            referencedColumns: ["model_id"]
          },
          {
            foreignKeyName: "forecast_metrics_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: true
            referencedRelation: "forecast_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forecast_metrics_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "forecast_products"
            referencedColumns: ["id"]
          },
        ]
      }
      forecast_models: {
        Row: {
          acuracia: number | null
          created_at: string | null
          data_fim: string
          data_inicio: string
          id: string
          modelo_serializado: string | null
          nome: string
          observacoes: string | null
          parametros: Json | null
          periodos_previsao: number | null
          product_id: string
          status: string | null
          tipo_modelo: string | null
          updated_at: string | null
          versao: string | null
        }
        Insert: {
          acuracia?: number | null
          created_at?: string | null
          data_fim: string
          data_inicio: string
          id?: string
          modelo_serializado?: string | null
          nome: string
          observacoes?: string | null
          parametros?: Json | null
          periodos_previsao?: number | null
          product_id: string
          status?: string | null
          tipo_modelo?: string | null
          updated_at?: string | null
          versao?: string | null
        }
        Update: {
          acuracia?: number | null
          created_at?: string | null
          data_fim?: string
          data_inicio?: string
          id?: string
          modelo_serializado?: string | null
          nome?: string
          observacoes?: string | null
          parametros?: Json | null
          periodos_previsao?: number | null
          product_id?: string
          status?: string | null
          tipo_modelo?: string | null
          updated_at?: string | null
          versao?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forecast_models_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "forecast_products"
            referencedColumns: ["id"]
          },
        ]
      }
      forecast_predictions: {
        Row: {
          created_at: string | null
          data: string
          erro_absoluto: number | null
          holiday_effect: number | null
          id: string
          model_id: string
          product_id: string
          seasonal: number | null
          tipo: string | null
          trend: number | null
          valor_real: number | null
          yhat: number
          yhat_lower: number | null
          yhat_upper: number | null
        }
        Insert: {
          created_at?: string | null
          data: string
          erro_absoluto?: number | null
          holiday_effect?: number | null
          id?: string
          model_id: string
          product_id: string
          seasonal?: number | null
          tipo?: string | null
          trend?: number | null
          valor_real?: number | null
          yhat: number
          yhat_lower?: number | null
          yhat_upper?: number | null
        }
        Update: {
          created_at?: string | null
          data?: string
          erro_absoluto?: number | null
          holiday_effect?: number | null
          id?: string
          model_id?: string
          product_id?: string
          seasonal?: number | null
          tipo?: string | null
          trend?: number | null
          valor_real?: number | null
          yhat?: number
          yhat_lower?: number | null
          yhat_upper?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forecast_predictions_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "forecast_model_performance"
            referencedColumns: ["model_id"]
          },
          {
            foreignKeyName: "forecast_predictions_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "forecast_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forecast_predictions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "forecast_products"
            referencedColumns: ["id"]
          },
        ]
      }
      forecast_products: {
        Row: {
          ativo: boolean | null
          categoria: string | null
          codigo_sku: string
          created_at: string | null
          descricao: string | null
          id: string
          nome: string | null
          referencia: string
          tipo: string | null
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          categoria?: string | null
          codigo_sku: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          nome?: string | null
          referencia: string
          tipo?: string | null
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          categoria?: string | null
          codigo_sku?: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          nome?: string | null
          referencia?: string
          tipo?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      forecast_sales: {
        Row: {
          codigo_sku: string | null
          created_at: string | null
          data: string
          empresa: string | null
          id: string
          local: string | null
          product_id: string
          quantidade: number
          updated_at: string | null
          valor_total: number | null
          valor_unitario: number | null
        }
        Insert: {
          codigo_sku?: string | null
          created_at?: string | null
          data: string
          empresa?: string | null
          id?: string
          local?: string | null
          product_id: string
          quantidade?: number
          updated_at?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Update: {
          codigo_sku?: string | null
          created_at?: string | null
          data?: string
          empresa?: string | null
          id?: string
          local?: string | null
          product_id?: string
          quantidade?: number
          updated_at?: string | null
          valor_total?: number | null
          valor_unitario?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forecast_sales_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "forecast_products"
            referencedColumns: ["id"]
          },
        ]
      }
      media_files: {
        Row: {
          id: number
          name: string | null
          url: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          url?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          url?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      forecast_model_performance: {
        Row: {
          classificacao_performance: string | null
          created_at: string | null
          data_fim: string | null
          data_inicio: string | null
          mae: number | null
          mape: number | null
          model_id: string | null
          model_name: string | null
          product_name: string | null
          r2: number | null
          referencia: string | null
          rmse: number | null
          status: string | null
          tipo_modelo: string | null
          versao: string | null
          wmape: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      match_document_chunks: {
        Args: {
          chat_session_filter?: string
          document_id_filter?: number
          match_count?: number
          query_embedding: string
          similarity_threshold?: number
          user_id_filter?: string
        }
        Returns: {
          category: string
          chunk_id: number
          chunk_index: number
          content: string
          document_id: number
          file_name: string
          file_type: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents:
        | {
            Args: {
              chat_session_filter?: string
              match_count?: number
              query_embedding: string
              user_id_filter?: string
            }
            Returns: {
              category: string
              content: string
              file_name: string
              file_type: string
              id: number
              similarity: number
            }[]
          }
        | {
            Args: {
              filter?: Json
              match_count?: number
              query_embedding: string
            }
            Returns: {
              content: string
              id: number
              metadata: Json
              similarity: number
            }[]
          }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
