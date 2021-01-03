<?php
// This file declares an Angular module which can be autoloaded in CiviCRM. See also:
// http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_angularModules

return array (
  'js' => 
    array (
        0 => 'ang/app.js',
        1 => 'ang/tournament/core/services/*.service.js',
        2 => 'ang/tournament/core/util.js',
        3 => 'ang/tournament/*.js',
        4 => 'ang/tournament/dashboard/dashboard.component.js',
        5 => 'ang/tournament/person/person.component.js',
        6 => 'ang/tournament/organization/organization.component.js',
    ),
  'css' => 
    array (
        0 => 'ang/tournament.css',
    ),
  'partials' => 
    array (
        0 => 'ang/tournament',
    ),
  'settings' => 
    array (),
);
