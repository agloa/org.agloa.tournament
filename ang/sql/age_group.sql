
--
-- TABLE: age_group
-- 
--  

CREATE TABLE age_group (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  title varchar(512) COLLATE utf8_unicode_ci NOT NULL ,
  description text COLLATE utf8_unicode_ci,
  tournament varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  age_limit int(10) unsigned NOT NULL 
);

-- 
ALTER TABLE age_group ADD CONSTRAINT unique_tournament_age_limit UNIQUE (tournament,age_limit);

CREATE INDEX age_group_index  ON age_group();

-- 
ALTER TABLE age_group ADD CONSTRAINT tournament_age_group_fkey FOREIGN KEY () REFERENCES tournament() ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
