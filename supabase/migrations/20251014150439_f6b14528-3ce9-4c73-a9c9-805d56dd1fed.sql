-- ============================================
-- SECURITY FIX: Role-Based Access Control
-- ============================================

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

-- Allow users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- FIX: Contact Submissions - Admin Only Access
-- ============================================

-- Drop existing permissive SELECT policy
DROP POLICY IF EXISTS "Usuários autenticados podem visualizar" ON public.contact_submissions;

-- Create new admin-only SELECT policy
CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep INSERT policy for public contact form submissions (already exists)
-- Keep UPDATE policy but restrict to admins
DROP POLICY IF EXISTS "Usuários autenticados podem atualizar" ON public.contact_submissions;

CREATE POLICY "Only admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policy for admins
CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- FIX: Forecast Models - Restrict Proprietary Data
-- ============================================

-- Drop existing permissive SELECT policy
DROP POLICY IF EXISTS "Permitir leitura de modelos para usuários autenticados" ON public.forecast_models;

-- Create new admin-only SELECT policy to protect modelo_serializado
CREATE POLICY "Only admins can view forecast models"
ON public.forecast_models
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Restrict other operations to admins as well
DROP POLICY IF EXISTS "Permitir inserção de modelos para service_role" ON public.forecast_models;
DROP POLICY IF EXISTS "Permitir atualização de modelos para service_role" ON public.forecast_models;

CREATE POLICY "Only admins can insert forecast models"
ON public.forecast_models
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update forecast models"
ON public.forecast_models
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete forecast models"
ON public.forecast_models
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- FIX: Other Forecast Tables - Admin Only
-- ============================================

-- Forecast Metrics
DROP POLICY IF EXISTS "Permitir leitura de métricas para usuários autenticados" ON public.forecast_metrics;
DROP POLICY IF EXISTS "Permitir inserção de métricas para service_role" ON public.forecast_metrics;
DROP POLICY IF EXISTS "Permitir atualização de métricas para service_role" ON public.forecast_metrics;

CREATE POLICY "Only admins can view forecast metrics"
ON public.forecast_metrics FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert forecast metrics"
ON public.forecast_metrics FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update forecast metrics"
ON public.forecast_metrics FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Forecast Predictions
DROP POLICY IF EXISTS "Permitir leitura de previsões para usuários autenticados" ON public.forecast_predictions;
DROP POLICY IF EXISTS "Permitir inserção de previsões para service_role" ON public.forecast_predictions;
DROP POLICY IF EXISTS "Permitir atualização de previsões para service_role" ON public.forecast_predictions;

CREATE POLICY "Only admins can view forecast predictions"
ON public.forecast_predictions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert forecast predictions"
ON public.forecast_predictions FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update forecast predictions"
ON public.forecast_predictions FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Forecast Products
DROP POLICY IF EXISTS "Permitir leitura de produtos para usuários autenticados" ON public.forecast_products;
DROP POLICY IF EXISTS "Permitir inserção de produtos para service_role" ON public.forecast_products;
DROP POLICY IF EXISTS "Permitir atualização de produtos para service_role" ON public.forecast_products;

CREATE POLICY "Only admins can view forecast products"
ON public.forecast_products FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert forecast products"
ON public.forecast_products FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update forecast products"
ON public.forecast_products FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Forecast Sales
DROP POLICY IF EXISTS "Permitir leitura de vendas para usuários autenticados" ON public.forecast_sales;
DROP POLICY IF EXISTS "Permitir inserção de vendas para service_role" ON public.forecast_sales;
DROP POLICY IF EXISTS "Permitir atualização de vendas para service_role" ON public.forecast_sales;

CREATE POLICY "Only admins can view forecast sales"
ON public.forecast_sales FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert forecast sales"
ON public.forecast_sales FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update forecast sales"
ON public.forecast_sales FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));