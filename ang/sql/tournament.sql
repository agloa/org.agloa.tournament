
--
-- TABLE: tournament
-- 
--  

CREATE TABLE tournament (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  title varchar(255) COLLATE utf8_unicode_ci NOT NULL ,
  description text COLLATE utf8_unicode_ci NOT NULL ,
  sponsor varchar(20) COLLATE utf8_unicode_ci NOT NULL 
);

CREATE INDEX tournament_sponsor_index  ON tournament(sponsor);

-- 
ALTER TABLE tournament ADD CONSTRAINT tournament_sponsor_fkey FOREIGN KEY (sponsor) REFERENCES tournament_sponsor(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
ALTER TABLE tournament ADD CONSTRAINT  FOREIGN KEY () REFERENCES age_group ();
