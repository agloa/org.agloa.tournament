
--
-- TABLE: tournament_sponsor
-- 
--  

CREATE TABLE tournament_sponsor (
  id varchar(20) NOT NULL ,
  label varchar(50) NOT NULL ,
  description text NOT NULL ,
  name varchar(64) COLLATE utf8_unicode_ci NOT NULL 
);

-- 
ALTER TABLE tournament_sponsor ADD CONSTRAINT primaryId PRIMARY KEY (id);

-- 
ALTER TABLE tournament_sponsor ADD CONSTRAINT uniqueLabel UNIQUE (label);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX tournament_sponsor_id_index  ON tournament_sponsor(id);
ALTER TABLE tournament_sponsor ADD CONSTRAINT  FOREIGN KEY () REFERENCES tournament ();
ALTER TABLE tournament_sponsor ADD CONSTRAINT  FOREIGN KEY () REFERENCES tournament ();
