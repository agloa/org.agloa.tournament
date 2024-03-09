
-- --------------------------------------------------------

--
-- Structure for view `tournament_ids`
--
DROP TABLE IF EXISTS `tournament_ids`;

DROP VIEW IF EXISTS `tournament_ids`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `tournament_ids`  AS SELECT `ce`.`id` AS `id` FROM (`tournament_event_type` `tet` join `civicrm_event` `ce` on((`ce`.`event_type_id` = `tet`.`value`))) ;
