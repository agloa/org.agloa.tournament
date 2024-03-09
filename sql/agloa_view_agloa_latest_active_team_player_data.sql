
-- --------------------------------------------------------

--
-- Structure for view `agloa_latest_active_team_player_data`
--
DROP TABLE IF EXISTS `agloa_latest_active_team_player_data`;

DROP VIEW IF EXISTS `agloa_latest_active_team_player_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_latest_active_team_player_data`  AS SELECT `atd`.`team_id` AS `team_id`, `atd`.`title` AS `team_name`, `atd`.`created_by` AS `created_by`, `atd`.`modified_by` AS `modified_by`, `atd`.`equations_21` AS `team_EQ`, `atd`.`on_sets_22` AS `team_OS`, `atd`.`linguishtik_23` AS `team_LI`, `atd`.`propaganda_24` AS `team_PROP`, `atd`.`presidents_25` AS `team_PREZ`, `atd`.`world_events_26` AS `team_THEME`, `atd`.`current_events_74` AS `team_CE`, `atd`.`wff_n_proof_27` AS `team_WFF`, `lapd`.`contact_id` AS `player_id`, `lapd`.`sort_name` AS `player_name`, `lapd`.`equations_11` AS `player_EQ`, `lapd`.`on_sets_12` AS `Player_OS`, `lapd`.`linguishtik_13` AS `player_LI`, `lapd`.`propaganda_14` AS `player_PROP`, `lapd`.`presidents_15` AS `player_PREZ`, `lapd`.`world_events_16` AS `player_theme`, `lapd`.`current_events_56` AS `player_CE`, `lapd`.`wff_n_proof_17` AS `player_WFF` FROM ((`active_team_players` `atp` join `active_team_data` `atd` on((`atp`.`team_id` = `atd`.`team_id`))) join `latest_active_player_data` `lapd` on((`lapd`.`contact_id` = `atp`.`contact_id`))) ;
