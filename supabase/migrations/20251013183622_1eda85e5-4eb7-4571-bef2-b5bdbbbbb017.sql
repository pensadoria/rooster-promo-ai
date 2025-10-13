-- Criar tabela para armazenar respostas do formulário de contato
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'novo',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Política: Qualquer pessoa pode inserir (enviar formulário)
CREATE POLICY "Qualquer pessoa pode enviar formulário"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política: Apenas usuários autenticados podem visualizar
CREATE POLICY "Usuários autenticados podem visualizar"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Política: Apenas usuários autenticados podem atualizar
CREATE POLICY "Usuários autenticados podem atualizar"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true);

-- Criar índice para melhorar performance de consultas por data
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Criar índice para consultas por status
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);