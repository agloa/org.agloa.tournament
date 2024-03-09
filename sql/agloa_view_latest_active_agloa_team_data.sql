
-- --------------------------------------------------------

--
-- Structure for view `latest_active_agloa_team_data`
--
DROP TABLE IF EXISTS `latest_active_agloa_team_data`;

DROP VIEW IF EXISTS `latest_active_agloa_team_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_agloa_team_data`  AS SELECT `active_team_data`.`team_id` AS `team_id`, `active_team_data`.`title` AS `title`, `active_team_data`.`created_by` AS `created_by`, `active_team_data`.`modified_by` AS `modified_by`, `active_team_data`.`equations_21` AS `EQ`, `active_team_data`.`on_sets_22` AS `OS`, `active_team_data`.`linguishtik_23` AS `LI`, `active_team_data`.`propaganda_24` AS `PROP`, `active_team_data`.`presidents_25` AS `PREZ`, `active_team_data`.`world_events_26` AS `WE`, `active_team_data`.`wff_n_proof_27` AS `WFF`, `active_team_data`.`current_events_74` AS `CE` FROM `active_team_data` ;
