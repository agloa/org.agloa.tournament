
-- --------------------------------------------------------

--
-- Structure for view `team_data`
--
DROP TABLE IF EXISTS `team_data`;

DROP VIEW IF EXISTS `team_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `team_data`  AS SELECT `civicrm_value_team_data_7`.`id` AS `id`, `civicrm_value_team_data_7`.`entity_id` AS `entity_id`, `civicrm_value_team_data_7`.`equations_21` AS `equations_21`, `civicrm_value_team_data_7`.`on_sets_22` AS `on_sets_22`, `civicrm_value_team_data_7`.`linguishtik_23` AS `linguishtik_23`, `civicrm_value_team_data_7`.`propaganda_24` AS `propaganda_24`, `civicrm_value_team_data_7`.`presidents_25` AS `presidents_25`, `civicrm_value_team_data_7`.`world_events_26` AS `world_events_26`, `civicrm_value_team_data_7`.`wff_n_proof_27` AS `wff_n_proof_27`, `civicrm_value_team_data_7`.`district_equations_seed_29` AS `district_equations_seed_29`, `civicrm_value_team_data_7`.`league_equations_seed_30` AS `league_equations_seed_30`, `civicrm_value_team_data_7`.`district_on_sets_seed_31` AS `district_on_sets_seed_31`, `civicrm_value_team_data_7`.`league_on_sets_seed_32` AS `league_on_sets_seed_32`, `civicrm_value_team_data_7`.`district_linguishtik_seed_33` AS `district_linguishtik_seed_33`, `civicrm_value_team_data_7`.`league_linguishtik_seed_34` AS `league_linguishtik_seed_34`, `civicrm_value_team_data_7`.`district_wff_n_proof_seed_35` AS `district_wff_n_proof_seed_35`, `civicrm_value_team_data_7`.`league_wff_n_proof_seed_36` AS `league_wff_n_proof_seed_36`, `civicrm_value_team_data_7`.`current_events_74` AS `current_events_74`, `civicrm_value_team_data_7`.`equations_section_75` AS `equations_section_75`, `civicrm_value_team_data_7`.`on_sets_section_76` AS `on_sets_section_76`, `civicrm_value_team_data_7`.`linguishtik_section_77` AS `linguishtik_section_77`, `civicrm_value_team_data_7`.`wff_n_proof_section_78` AS `wff_n_proof_section_78` FROM `civicrm_value_team_data_7` ;
