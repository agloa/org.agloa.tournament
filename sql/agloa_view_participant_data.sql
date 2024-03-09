
-- --------------------------------------------------------

--
-- Structure for view `participant_data`
--
DROP TABLE IF EXISTS `participant_data`;

DROP VIEW IF EXISTS `participant_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `participant_data`  AS SELECT `civicrm_value_participant_data_6`.`id` AS `id`, `civicrm_value_participant_data_6`.`entity_id` AS `entity_id`, `civicrm_value_participant_data_6`.`tee_shirt_size_18` AS `tee_shirt_size_18`, `civicrm_value_participant_data_6`.`picture_57` AS `picture_57`, `civicrm_value_participant_data_6`.`name_of_nominator_s__58` AS `name_of_nominator_s__58`, `civicrm_value_participant_data_6`.`relationship_of_nominator_s_to_n_59` AS `relationship_of_nominator_s_to_n_59`, `civicrm_value_participant_data_6`.`how_many_national_tournaments_ha_61` AS `how_many_national_tournaments_ha_61`, `civicrm_value_participant_data_6`.`how_many_years_has_the_nominee_b_62` AS `how_many_years_has_the_nominee_b_62`, `civicrm_value_participant_data_6`.`please_explain_examples_of_educa_65` AS `please_explain_examples_of_educa_65`, `civicrm_value_participant_data_6`.`please_relate_an_anecdotal_acade_66` AS `please_relate_an_anecdotal_acade_66`, `civicrm_value_participant_data_6`.`please_make_any_other_comments_t_67` AS `please_make_any_other_comments_t_67`, `civicrm_value_participant_data_6`.`at_what_age_levels_does_the_nomi_68` AS `at_what_age_levels_does_the_nomi_68`, `civicrm_value_participant_data_6`.`which_games_does_the_nominee_nor_70` AS `which_games_does_the_nominee_nor_70`, `civicrm_value_participant_data_6`.`what_success_locally_and_nationa_71` AS `what_success_locally_and_nationa_71`, `civicrm_value_participant_data_6`.`which_national_championships_has_72` AS `which_national_championships_has_72`, `civicrm_value_participant_data_6`.`housing_group_73` AS `housing_group_73` FROM `civicrm_value_participant_data_6` ;
