
-- --------------------------------------------------------

--
-- Structure for view `group_state_province`
--
DROP TABLE IF EXISTS `group_state_province`;

DROP VIEW IF EXISTS `group_state_province`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `group_state_province`  AS SELECT `civicrm_group`.`id` AS `id`, `civicrm_state_province`.`abbreviation` AS `abbreviation` FROM ((`civicrm_group` left join `civicrm_address` on(((`civicrm_address`.`contact_id` = `civicrm_group`.`created_id`) and (`civicrm_address`.`is_primary` = 1)))) left join `civicrm_state_province` on((`civicrm_state_province`.`id` = `civicrm_address`.`state_province_id`))) ;
