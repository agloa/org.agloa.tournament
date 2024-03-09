
-- --------------------------------------------------------

--
-- Structure for view `player_data`
--
DROP TABLE IF EXISTS `player_data`;

DROP VIEW IF EXISTS `player_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `player_data`  AS SELECT `civicrm_value_games_registration_5`.`id` AS `id`, `civicrm_value_games_registration_5`.`entity_id` AS `entity_id`, `civicrm_value_games_registration_5`.`equations_11` AS `equations_11`, `civicrm_value_games_registration_5`.`on_sets_12` AS `on_sets_12`, `civicrm_value_games_registration_5`.`linguishtik_13` AS `linguishtik_13`, `civicrm_value_games_registration_5`.`propaganda_14` AS `propaganda_14`, `civicrm_value_games_registration_5`.`presidents_15` AS `presidents_15`, `civicrm_value_games_registration_5`.`world_events_16` AS `world_events_16`, `civicrm_value_games_registration_5`.`wff_n_proof_17` AS `wff_n_proof_17`, `civicrm_value_games_registration_5`.`geocode_20` AS `geocode_20`, `civicrm_value_games_registration_5`.`scheulding_code_28` AS `scheulding_code_28`, `civicrm_value_games_registration_5`.`current_events_56` AS `current_events_56` FROM `civicrm_value_games_registration_5` ;
