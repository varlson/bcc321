CREATE TABLE Usuario (
    id NUMERIC(8) NOT NULL ,
    nome_de_usuario VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    fuso_horario VARCHAR(30), 
    CONSTRAINT pk_user PRIMARY KEY (ID)
);

INSERT INTO Usuario
VALUES (1,'Joao Silva','123','GMT-3');

CREATE TABLE Status_usuario(
	id_usuario NUMERIC(8) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT TRUE,
	data DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT pk_status_user PRIMARY KEY (id_usuario, status, data)
);

INSERT INTO Status_usuario
VALUES (1, True);

CREATE TABLE Monitor (
    id NUMERIC(8) NOT NULL ,
    nome VARCHAR(30) NOT NULL,
    id_usuario NUMERIC(8) NOT NULL,
    data_de_criacao DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_mon PRIMARY KEY (ID)
);

INSERT INTO Monitor
VALUES (1, 'monitor', 1);

CREATE TABLE Status_monitor(
	id_monitor NUMERIC(8) NOT NULL,
	status BOOLEAN  NOT NULL DEFAULT TRUE,
	data DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT pk_status_monitor PRIMARY KEY (id_monitor, status, data)
);

INSERT INTO Status_monitor
VALUES (1, True);

CREATE TABLE Heartbeat (
	id_monitor NUMERIC(8) NOT NULL,
	heartbeat NUMERIC(8) NOT NULL ,
    ping NUMERIC(30)  NOT NULL,
    tempo NUMERIC(30)  NOT NULL,
    status BOOLEAN  DEFAULT TRUE,
    intervalo NUMERIC(30) NOT NULL,
    importante NUMERIC(30) NOT NULL DEFAULT 1,
	data_emissao DATE DEFAULT CURRENT_TIMESTAMP, 
    CONSTRAINT pk_heartbeat PRIMARY KEY (id_monitor, heartbeat)
);

INSERT INTO Heartbeat
VALUES (1, 1, 10, 100, True, 100, 1);

CREATE TABLE Proxy (
    ip VARCHAR(30) NOT NULL,
    porta NUMERIC(30) NOT NULL,
	protocolo VARCHAR(30) NOT NULL,
    CONSTRAINT pk_proxy PRIMARY KEY (ip, porta)
);

INSERT INTO Proxy
VALUES ('0', 0, 'TCP/IP');
INSERT INTO Proxy
VALUES ('255.255.255.255', 42, 'TCP/IP');

CREATE TABLE Status_proxy(
	ip_proxy VARCHAR(30) NOT NULL,
	porta_proxy NUMERIC(30) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT TRUE,
	data DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT pk_status_proxy PRIMARY KEY (ip_proxy, porta_proxy, status, data)
);

INSERT INTO Status_proxy
VALUES ('255.255.255.255', 42, True);

CREATE TABLE Servidor (
    id NUMERIC(8) NOT NULL ,
    nome VARCHAR(30) NOT NULL,
    CONSTRAINT pk_ser PRIMARY KEY (ID)
);

INSERT INTO Servidor
VALUES (1, 'servidor1');
INSERT INTO Servidor
VALUES (2, 'servidor2');
INSERT INTO Servidor
VALUES (3, 'servidor3');

CREATE TABLE Servidor_DNS (
    ip VARCHAR(30) NOT NULL,
    porta NUMERIC(30) NOT NULL DEFAULT 0,
	id_servidor NUMERIC(8) NOT NULL,
    CONSTRAINT pk_ser_dns PRIMARY KEY (ID_Servidor)
);

INSERT INTO Servidor_DNS
VALUES ('255.255.255.255', 42, 1);

CREATE TABLE Servidor_HTTP (
	url VARCHAR(50) NOT NULL,
	metodo VARCHAR(30) NOT NULL,
	id_servidor NUMERIC(8) NOT NULL,
    CONSTRAINT pk_ser_http PRIMARY KEY (ID_Servidor)
);

INSERT INTO Servidor_HTTP
VALUES ('http://xyz.com', 'GET', 2);

CREATE TABLE Servidor_MQTT (
    topico VARCHAR(30) NOT NULL,
	id_servidor NUMERIC(30) NOT NULL,
    CONSTRAINT pk_ser_mqtt PRIMARY KEY (ID_Servidor)
);

INSERT INTO Servidor_MQTT
VALUES ('sensores', 3);

CREATE TABLE Monitora (
	id_monitor NUMERIC(8) NOT NULL,
    id_servidor NUMERIC(8) NOT NULL,
	ip_proxy VARCHAR(30) NOT NULL DEFAULT '0',
    porta_proxy NUMERIC(30) NOT NULL DEFAULT 0,
    CONSTRAINT pk_monitora PRIMARY KEY (id_monitor, id_servidor)
);

INSERT INTO Monitora
VALUES (1, 1, '255.255.255.255', 42);
INSERT INTO Monitora
VALUES (1, 2);

CREATE TABLE Notificacao (
    id NUMERIC(8) NOT NULL ,
    nome VARCHAR(30) NOT NULL,
    CONSTRAINT pk_notificacao PRIMARY KEY (ID)
);

INSERT INTO Notificacao
VALUES (1, 'telegram');

CREATE TABLE Chatbot (
    token VARCHAR(32) NOT NULL,
    chat_id NUMERIC(30) NOT NULL,
    id_notificacao NUMERIC(8) NOT NULL,
    CONSTRAINT pk_chatbot PRIMARY KEY (id_notificacao)
);

INSERT INTO Chatbot
VALUES (57, 44, 1);

CREATE TABLE Email (
    ip VARCHAR(30) NOT NULL,
    porta NUMERIC(30) NOT NULL,
    origem VARCHAR(30) NOT NULL,
    destino VARCHAR(30) NOT NULL,
    id_notificacao NUMERIC(8) NOT NULL,
    CONSTRAINT pk_email PRIMARY KEY (id_notificacao)
);

INSERT INTO Email
VALUES ('255.255.255.255', 42, 'ola@gmail.com', 'ola2@gmail.com', 1);

CREATE TABLE SMS (
    telefone VARCHAR(30) NOT NULL,
    api VARCHAR(30) NOT NULL,
    id_notificacao NUMERIC(8) NOT NULL,
    CONSTRAINT pk_SMS PRIMARY KEY (id_notificacao)
);

INSERT INTO SMS
VALUES (32, 'api', 1);

CREATE TABLE Notifica (
    id_monitor NUMERIC(8) NOT NULL,
    id_notificacao NUMERIC(8) NOT NULL,
    data_de_criacao DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_notifica PRIMARY KEY (id_monitor, id_notificacao)
);

INSERT INTO Notifica
VALUES (1, 1);

CREATE TABLE Tag (
	nome VARCHAR(30) NOT NULL,
	cor VARCHAR(30) NOT NULL,
    valor NUMERIC(30) NOT NULL,
    CONSTRAINT pk_tag PRIMARY KEY (nome)
);

INSERT INTO Tag
VALUES ('tag', 'azul', 123);

CREATE TABLE Marca (
    id_monitor NUMERIC(8) NOT NULL,
    nome_tag VARCHAR(30) NOT NULL,
    CONSTRAINT pk_marca PRIMARY KEY (id_monitor, nome_tag)
);

INSERT INTO Marca
VALUES (1, 'tag');

CREATE TABLE Status_page (
    slug VARCHAR(30) NOT NULL,
	titulo VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    CONSTRAINT pk_status_page PRIMARY KEY (slug)
);

INSERT INTO Status_page
VALUES ('status_page', 'titulo', 'descricao');

CREATE TABLE Organizado_por (
    slug VARCHAR(30) NOT NULL,
    id_monitor NUMERIC(8) NOT NULL,
    CONSTRAINT pk_organizado_por PRIMARY KEY (slug, id_monitor)
);

INSERT INTO Organizado_por
VALUES ('status_page', 1);

CREATE TABLE Grupo (
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    CONSTRAINT pk_grupo PRIMARY KEY (nome)
);

INSERT INTO Grupo
VALUES ('grupo', 'descricao');

CREATE TABLE Agrupa (
    nome_grupo VARCHAR(30) NOT NULL,
    id_monitor NUMERIC(8) NOT NULL,
    CONSTRAINT pk_agrupa PRIMARY KEY (nome_grupo, id_monitor)
);

INSERT INTO Agrupa
VALUES ('grupo', 1);

CREATE TABLE Separa (
    slug VARCHAR(30) NOT NULL,
    nome_grupo VARCHAR(30) NOT NULL,
    CONSTRAINT pk_separa PRIMARY KEY (slug, nome_grupo)
);

INSERT INTO Separa
VALUES ('status_page', 'grupo');

CREATE TABLE Incidente (
    titulo VARCHAR(30) NOT NULL,
	slug VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    data DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_incidente PRIMARY KEY (titulo, slug)
);

INSERT INTO Incidente
VALUES ('aaaa', 'status_page', 'descricao');

ALTER TABLE Status_usuario
ADD CONSTRAINT fk_status_usuario_id_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario (id);

ALTER TABLE Monitor
ADD CONSTRAINT fk_monitor_id_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario (id);

ALTER TABLE Status_monitor
ADD CONSTRAINT fk_status_monitor_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id);

ALTER TABLE Heartbeat
ADD CONSTRAINT fk_heartbeat_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id);

ALTER TABLE Status_proxy
ADD CONSTRAINT fk_status_proxy_ip_porta_proxy FOREIGN KEY (ip_proxy, porta_proxy) REFERENCES Proxy (ip, porta);

ALTER TABLE Monitora
ADD CONSTRAINT fk_monitora_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id);

ALTER TABLE Monitora
ADD CONSTRAINT fk_monitora_id_servidor FOREIGN KEY (id_servidor) REFERENCES Servidor (id);

ALTER TABLE Monitora
ADD CONSTRAINT fk_monitora_ip_porta_proxy FOREIGN KEY (ip_proxy, porta_proxy) REFERENCES Proxy (ip, porta) ON DELETE SET DEFAULT;

ALTER TABLE Notifica
ADD CONSTRAINT fk_notifica_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id) ON DELETE CASCADE;

ALTER TABLE Notifica
ADD CONSTRAINT fk_notifica_id_notificacao FOREIGN KEY (id_notificacao) REFERENCES Notificacao (id) ON DELETE CASCADE;

ALTER TABLE Marca
ADD CONSTRAINT fk_marca_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id) ON DELETE CASCADE;

ALTER TABLE Marca
ADD CONSTRAINT fk_marca_nome_tag FOREIGN KEY (nome_tag) REFERENCES Tag (nome) ON DELETE CASCADE;

ALTER TABLE Organizado_por
ADD CONSTRAINT fk_organizado_por_slug FOREIGN KEY (slug) REFERENCES Status_page (slug) ON DELETE CASCADE;

ALTER TABLE Organizado_por
ADD CONSTRAINT fk_organizado_por_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id) ON DELETE CASCADE;

ALTER TABLE Agrupa
ADD CONSTRAINT fk_agrupa_nome_grupo FOREIGN KEY (nome_grupo) REFERENCES Grupo (nome) ON DELETE CASCADE;

ALTER TABLE Agrupa
ADD CONSTRAINT fk_agrupa_id_monitor FOREIGN KEY (id_monitor) REFERENCES Monitor (id) ON DELETE CASCADE;

ALTER TABLE Separa
ADD CONSTRAINT fk_separa_slug FOREIGN KEY (slug) REFERENCES Status_page (slug) ON DELETE CASCADE;

ALTER TABLE Separa
ADD CONSTRAINT fk_separa_nome_grupo FOREIGN KEY (nome_grupo) REFERENCES Grupo (nome) ON DELETE CASCADE;

ALTER TABLE Incidente
ADD CONSTRAINT fk_incidente_slug FOREIGN KEY (slug) REFERENCES Status_page (slug);

ALTER TABLE Servidor_DNS
ADD CONSTRAINT fk_ser_dns_id_servidor FOREIGN KEY (id_servidor) REFERENCES Servidor (id);

ALTER TABLE Servidor_HTTP
ADD CONSTRAINT fk_ser_http_id_servidor FOREIGN KEY (id_servidor) REFERENCES Servidor (id);

ALTER TABLE Servidor_MQTT
ADD CONSTRAINT fk_ser_mqtt_id_servidor FOREIGN KEY (id_servidor) REFERENCES Servidor (id);

ALTER TABLE Chatbot
ADD CONSTRAINT fk_chatbot_id_notificacao FOREIGN KEY (id_notificacao) REFERENCES Notificacao (id);

ALTER TABLE Email
ADD CONSTRAINT fk_email_id_notificacao FOREIGN KEY (id_notificacao) REFERENCES Notificacao (id);

ALTER TABLE SMS
ADD CONSTRAINT fk_sms_id_notificacao FOREIGN KEY (id_notificacao) REFERENCES Notificacao (id);
