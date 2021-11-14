
--
-- TABLE: competition_type
-- 
--  

CREATE TABLE competition_type (
  id varchar(20) COLLATE utf8_unicode_ci NOT NULL ,
  label varchar(512) COLLATE utf8_unicode_ci NOT NULL ,
  name varchar(512) COLLATE utf8_unicode_ci NOT NULL ,
  category varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  style varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  match_size int(10) unsigned,
  min_score decimal DEFAULT NULL,
  max_score decimal DEFAULT NULL
);

CREATE INDEX competition_type_category_index  ON competition_type(category);

CREATE INDEX competition_type_index  ON competition_type();

-- 
ALTER TABLE competition_type ADD CONSTRAINT competition_type_category FOREIGN KEY (category) REFERENCES competition_category(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE competition_type ADD CONSTRAINT competition_type_style FOREIGN KEY () REFERENCES competition_style() ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 
