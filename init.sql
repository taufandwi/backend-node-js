CREATE SEQUENCE public.pengguna_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9999999999999999
    CACHE 1;

CREATE SEQUENCE public.pesanan_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9999999999999999
    CACHE 1;

CREATE TABLE public.pelanggan
(
    id integer NOT NULL DEFAULT nextval('pengguna_id_seq'::regclass),
    names text COLLATE pg_catalog."default",
    ages integer,
    phone_number text COLLATE pg_catalog."default",
    "createdAt" date,
    "updatedAt" date,
    registration_date date,
    CONSTRAINT "Pelanggan_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.pesanan
(
    id integer NOT NULL DEFAULT nextval('pesanan_id_seq'::regclass),
    id_pelanggan integer,
    purchase_date date,
    total_price double precision,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT pesanan_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;