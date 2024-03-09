
-- --------------------------------------------------------

--
-- Structure for view `EligibleTeamPlayerCodes`
--
DROP TABLE IF EXISTS `EligibleTeamPlayerCodes`;

DROP VIEW IF EXISTS `EligibleTeamPlayerCodes`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `EligibleTeamPlayerCodes`  AS SELECT 1 AS `team`, 1 AS `Player`, 1 AS `registration_group`, 1 AS `scheduling_group`, 1 AS `competition_codes` ;
