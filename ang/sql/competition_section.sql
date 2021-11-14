
--
-- TABLE: competition_section
-- 
--  

CREATE TABLE competition_section (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  competition varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  title varchar(512) COLLATE utf8_unicode_ci NOT NULL ,
  description text COLLATE utf8_unicode_ci,
  ordinal int(10) NOT NULL 
);

-- 
ALTER TABLE competition_section ADD CONSTRAINT competition_section_pk PRIMARY KEY (id);

CREATE INDEX competition_section_competition_index  ON competition_section(competition);

-- 
ALTER TABLE competition_section ADD CONSTRAINT competition_section_fk FOREIGN KEY (competition) REFERENCES competition(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX competition_section_id_index  ON competition_section(id);

CREATE INDEX competition_section_competition_index  ON competition_section(competition);
