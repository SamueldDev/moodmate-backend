--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 16.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_moods_mood; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_moods_mood AS ENUM (
    'happy',
    'sad',
    'tired',
    'angry',
    'relaxed'
);


ALTER TYPE public.enum_moods_mood OWNER TO postgres;

--
-- Name: enum_suggestions_mood; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_suggestions_mood AS ENUM (
    'happy',
    'sad',
    'tired',
    'angry',
    'relaxed'
);


ALTER TYPE public.enum_suggestions_mood OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: moods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moods (
    id integer NOT NULL,
    mood public.enum_moods_mood NOT NULL,
    "userId" uuid NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "UserId" uuid
);


ALTER TABLE public.moods OWNER TO postgres;

--
-- Name: moods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.moods_id_seq OWNER TO postgres;

--
-- Name: moods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moods_id_seq OWNED BY public.moods.id;


--
-- Name: suggestions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.suggestions (
    id integer NOT NULL,
    category character varying(255),
    content text,
    mood public.enum_suggestions_mood NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.suggestions OWNER TO postgres;

--
-- Name: suggestions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.suggestions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.suggestions_id_seq OWNER TO postgres;

--
-- Name: suggestions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.suggestions_id_seq OWNED BY public.suggestions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255),
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: moods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moods ALTER COLUMN id SET DEFAULT nextval('public.moods_id_seq'::regclass);


--
-- Name: suggestions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suggestions ALTER COLUMN id SET DEFAULT nextval('public.suggestions_id_seq'::regclass);


--
-- Data for Name: moods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moods (id, mood, "userId", "createdAt", "updatedAt", "UserId") FROM stdin;
1	sad	7ee737ce-60f0-4098-b2bc-05018cb199c4	2025-06-05 17:33:44.911+01	2025-06-05 17:33:44.911+01	\N
2	happy	7ee737ce-60f0-4098-b2bc-05018cb199c4	2025-06-05 17:48:31.993+01	2025-06-05 17:48:31.993+01	\N
3	tired	7ee737ce-60f0-4098-b2bc-05018cb199c4	2025-06-05 17:49:06.335+01	2025-06-05 17:49:06.335+01	\N
\.


--
-- Data for Name: suggestions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.suggestions (id, category, content, mood, "createdAt", "updatedAt") FROM stdin;
1	quote	Keep your head up.	sad	2025-06-05 18:25:29.908+01	2025-06-05 18:25:29.908+01
2	music	https://open.spotify.com/track/happy	happy	2025-06-05 18:25:29.908+01	2025-06-05 18:25:29.908+01
3	activity	Take a walk outside.	tired	2025-06-05 18:25:29.908+01	2025-06-05 18:25:29.908+01
4	quote	Speak when you are angry and you will make the best speech you will ever regret.	angry	2025-06-05 18:25:29.908+01	2025-06-05 18:25:29.908+01
5	activity	Take a warm bath or listen to ambient sounds.	relaxed	2025-06-05 18:25:29.908+01	2025-06-05 18:25:29.908+01
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
d5e9fd54-637a-4940-933d-6baaa24673ed	Alice Sky	alice@example.com	$2b$10$61QUgFJx0KTEbWPHN2Mzl.N3.mVkdneRWlvWvy1nfjIidFF/9U1dC	2025-06-05 12:59:22.155+01	2025-06-05 12:59:22.155+01
3c28104f-aa43-4f2c-b21a-14757bdd05f9	Brian Moon	brian@example.com	$2b$10$soDRB8Ax/XdHRaL8G/pfZ./fl.TzmWLJLYqTrMUuH5M/tNpNvppuG	2025-06-05 13:01:22.304+01	2025-06-05 13:01:22.304+01
d8d42098-d26a-4fa2-89ce-4ec03fbc3829	Chloe Rivers	chloe@example.com	$2b$10$/mqn9MTsbXyFmgp7bCh8ruOsqdEU2.f1cbMXVHkFkKGIX6yTuH1nS	2025-06-05 13:01:46.934+01	2025-06-05 13:01:46.934+01
be288aa6-bc57-44a0-b1e2-7a7c3582be74	David Zen	david@example.com	$2b$10$cM4Wdkz.ISvVJq2snMSRh.Ggoqt5g3EVPK5RIL45XAU6IJT8OxxjK	2025-06-05 13:02:30.623+01	2025-06-05 13:02:30.623+01
7ee737ce-60f0-4098-b2bc-05018cb199c4	Ella Joy	ella@example.com	$2b$10$YBSgMc8EyPYiPIplqOvC9uTT7U2Bw1FT5Sf/Tj0f/..YfHsHBa3Hq	2025-06-05 13:03:05.039+01	2025-06-05 13:03:05.039+01
\.


--
-- Name: moods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moods_id_seq', 3, true);


--
-- Name: suggestions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.suggestions_id_seq', 5, true);


--
-- Name: moods moods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT moods_pkey PRIMARY KEY (id);


--
-- Name: suggestions suggestions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.suggestions
    ADD CONSTRAINT suggestions_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_email_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key1 UNIQUE (email);


--
-- Name: users users_email_key10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key10 UNIQUE (email);


--
-- Name: users users_email_key11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key11 UNIQUE (email);


--
-- Name: users users_email_key12; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key12 UNIQUE (email);


--
-- Name: users users_email_key13; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key13 UNIQUE (email);


--
-- Name: users users_email_key14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key14 UNIQUE (email);


--
-- Name: users users_email_key15; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key15 UNIQUE (email);


--
-- Name: users users_email_key16; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key16 UNIQUE (email);


--
-- Name: users users_email_key17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key17 UNIQUE (email);


--
-- Name: users users_email_key18; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key18 UNIQUE (email);


--
-- Name: users users_email_key19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key19 UNIQUE (email);


--
-- Name: users users_email_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key2 UNIQUE (email);


--
-- Name: users users_email_key20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key20 UNIQUE (email);


--
-- Name: users users_email_key21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key21 UNIQUE (email);


--
-- Name: users users_email_key22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key22 UNIQUE (email);


--
-- Name: users users_email_key23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key23 UNIQUE (email);


--
-- Name: users users_email_key24; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key24 UNIQUE (email);


--
-- Name: users users_email_key25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key25 UNIQUE (email);


--
-- Name: users users_email_key26; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key26 UNIQUE (email);


--
-- Name: users users_email_key27; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key27 UNIQUE (email);


--
-- Name: users users_email_key28; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key28 UNIQUE (email);


--
-- Name: users users_email_key29; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key29 UNIQUE (email);


--
-- Name: users users_email_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key3 UNIQUE (email);


--
-- Name: users users_email_key30; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key30 UNIQUE (email);


--
-- Name: users users_email_key31; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key31 UNIQUE (email);


--
-- Name: users users_email_key32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key32 UNIQUE (email);


--
-- Name: users users_email_key4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key4 UNIQUE (email);


--
-- Name: users users_email_key5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key5 UNIQUE (email);


--
-- Name: users users_email_key6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key6 UNIQUE (email);


--
-- Name: users users_email_key7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key7 UNIQUE (email);


--
-- Name: users users_email_key8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key8 UNIQUE (email);


--
-- Name: users users_email_key9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key9 UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: moods moods_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT "moods_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: moods moods_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moods
    ADD CONSTRAINT "moods_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

