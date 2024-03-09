
-- --------------------------------------------------------

--
-- Structure for view `tournament_event_type`
--
DROP TABLE IF EXISTS `tournament_event_type`;

DROP VIEW IF EXISTS `tournament_event_type`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `tournament_event_type`  AS SELECT `cov`.`value` AS `value` FROM (`civicrm_option_value` `cov` join `civicrm_option_group` `cog` on((`cog`.`id` = `cov`.`option_group_id`))) WHERE ((`cov`.`label` like 'Tournament') AND (`cog`.`name` like 'event_type')) ;
