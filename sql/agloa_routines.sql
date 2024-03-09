
DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `AGLOA_CREATE_VIEWS`$$
$$

DROP PROCEDURE IF EXISTS `import_team_sections`$$
CREATE DEFINER=`agloa`@`%` PROCEDURE `import_team_sections` ()  DETERMINISTIC UPDATE civicrm_value_team_data_7 as teams INNER JOIN teamsections ON teams.entity_id = teamsections.ID SET teams.equations_section_75= teamsections.SBE,teams.on_sets_section_76= teamsections.SBO, teams.linguishtik_section_77= teamsections.SBL$$

--
-- Functions
--
DROP FUNCTION IF EXISTS `civicrm_strip_non_numeric`$$
$$

DROP FUNCTION IF EXISTS `competitionCode`$$
$$

DROP FUNCTION IF EXISTS `get_names_from_ids`$$
$$

DELIMITER ;
