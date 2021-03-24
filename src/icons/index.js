import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faDownload,
	faMapMarkerAlt,
	faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faBars, faTimes, faEnvelope, faDownload, faMapMarkerAlt);

Vue.component('fa-icon', FontAwesomeIcon);
