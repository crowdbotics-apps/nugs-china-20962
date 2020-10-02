import * as types from "./constants"
export const signup_post_api_v1_signup_read = () => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ
})

export const signup_post_api_v1_signup_readSucceeded = (response, starter) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_SUCCEEDED,
  response,
  starter
})

export const signup_post_api_v1_signup_readFailed = (error, starter) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_FAILED,
  error,
  starter
})

export const api_v1_category_list = () => ({ type: types.API_V1_CATEGORY_LIST })
export const api_v1_category_listSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_listFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_LIST_FAILED,
  error,
  starter
})

export const api_v1_category_create = () => ({
  type: types.API_V1_CATEGORY_CREATE
})

export const api_v1_category_createSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_createFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_FAILED,
  error,
  starter
})

export const api_v1_category_read = () => ({ type: types.API_V1_CATEGORY_READ })
export const api_v1_category_readSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_readFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_READ_FAILED,
  error,
  starter
})

export const api_v1_category_update = () => ({
  type: types.API_V1_CATEGORY_UPDATE
})

export const api_v1_category_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_updateFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_category_partial_update = () => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE
})

export const api_v1_category_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_category_delete = () => ({
  type: types.API_V1_CATEGORY_DELETE
})

export const api_v1_category_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_category_deleteFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_FAILED,
  error,
  starter
})

export const api_v1_course_list = () => ({ type: types.API_V1_COURSE_LIST })
export const api_v1_course_listSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_listFailed = (error, starter) => ({
  type: types.API_V1_COURSE_LIST_FAILED,
  error,
  starter
})

export const api_v1_course_create = () => ({ type: types.API_V1_COURSE_CREATE })
export const api_v1_course_createSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_createFailed = (error, starter) => ({
  type: types.API_V1_COURSE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_course_read = () => ({ type: types.API_V1_COURSE_READ })
export const api_v1_course_readSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_readFailed = (error, starter) => ({
  type: types.API_V1_COURSE_READ_FAILED,
  error,
  starter
})

export const api_v1_course_update = () => ({ type: types.API_V1_COURSE_UPDATE })
export const api_v1_course_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_updateFailed = (error, starter) => ({
  type: types.API_V1_COURSE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_course_partial_update = () => ({
  type: types.API_V1_COURSE_PARTIAL_UPDATE
})

export const api_v1_course_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_COURSE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_course_delete = () => ({ type: types.API_V1_COURSE_DELETE })
export const api_v1_course_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_COURSE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_course_deleteFailed = (error, starter) => ({
  type: types.API_V1_COURSE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})

export const api_v1_customtext_update = () => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE
})

export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_customtext_partial_update = () => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE
})

export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_enrollment_list = () => ({
  type: types.API_V1_ENROLLMENT_LIST
})

export const api_v1_enrollment_listSucceeded = (response, starter) => ({
  type: types.API_V1_ENROLLMENT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_listFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_LIST_FAILED,
  error,
  starter
})

export const api_v1_enrollment_create = () => ({
  type: types.API_V1_ENROLLMENT_CREATE
})

export const api_v1_enrollment_createSucceeded = (response, starter) => ({
  type: types.API_V1_ENROLLMENT_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_createFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_CREATE_FAILED,
  error,
  starter
})

export const api_v1_enrollment_read = () => ({
  type: types.API_V1_ENROLLMENT_READ
})

export const api_v1_enrollment_readSucceeded = (response, starter) => ({
  type: types.API_V1_ENROLLMENT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_readFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_READ_FAILED,
  error,
  starter
})

export const api_v1_enrollment_update = () => ({
  type: types.API_V1_ENROLLMENT_UPDATE
})

export const api_v1_enrollment_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ENROLLMENT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_updateFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_enrollment_partial_update = () => ({
  type: types.API_V1_ENROLLMENT_PARTIAL_UPDATE
})

export const api_v1_enrollment_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_ENROLLMENT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_enrollment_delete = () => ({
  type: types.API_V1_ENROLLMENT_DELETE
})

export const api_v1_enrollment_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_ENROLLMENT_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_enrollment_deleteFailed = (error, starter) => ({
  type: types.API_V1_ENROLLMENT_DELETE_FAILED,
  error,
  starter
})

export const api_v1_event_list = () => ({ type: types.API_V1_EVENT_LIST })
export const api_v1_event_listSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_listFailed = (error, starter) => ({
  type: types.API_V1_EVENT_LIST_FAILED,
  error,
  starter
})

export const api_v1_event_create = () => ({ type: types.API_V1_EVENT_CREATE })
export const api_v1_event_createSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_createFailed = (error, starter) => ({
  type: types.API_V1_EVENT_CREATE_FAILED,
  error,
  starter
})

export const api_v1_event_read = () => ({ type: types.API_V1_EVENT_READ })
export const api_v1_event_readSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_readFailed = (error, starter) => ({
  type: types.API_V1_EVENT_READ_FAILED,
  error,
  starter
})

export const api_v1_event_update = () => ({ type: types.API_V1_EVENT_UPDATE })
export const api_v1_event_updateSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_updateFailed = (error, starter) => ({
  type: types.API_V1_EVENT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_event_partial_update = () => ({
  type: types.API_V1_EVENT_PARTIAL_UPDATE
})

export const api_v1_event_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_EVENT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_event_delete = () => ({ type: types.API_V1_EVENT_DELETE })
export const api_v1_event_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_EVENT_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_event_deleteFailed = (error, starter) => ({
  type: types.API_V1_EVENT_DELETE_FAILED,
  error,
  starter
})

export const api_v1_group_list = () => ({ type: types.API_V1_GROUP_LIST })
export const api_v1_group_listSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_listFailed = (error, starter) => ({
  type: types.API_V1_GROUP_LIST_FAILED,
  error,
  starter
})

export const api_v1_group_create = () => ({ type: types.API_V1_GROUP_CREATE })
export const api_v1_group_createSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_createFailed = (error, starter) => ({
  type: types.API_V1_GROUP_CREATE_FAILED,
  error,
  starter
})

export const api_v1_group_read = () => ({ type: types.API_V1_GROUP_READ })
export const api_v1_group_readSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_readFailed = (error, starter) => ({
  type: types.API_V1_GROUP_READ_FAILED,
  error,
  starter
})

export const api_v1_group_update = () => ({ type: types.API_V1_GROUP_UPDATE })
export const api_v1_group_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_updateFailed = (error, starter) => ({
  type: types.API_V1_GROUP_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_group_partial_update = () => ({
  type: types.API_V1_GROUP_PARTIAL_UPDATE
})

export const api_v1_group_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GROUP_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_group_delete = () => ({ type: types.API_V1_GROUP_DELETE })
export const api_v1_group_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GROUP_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_group_deleteFailed = (error, starter) => ({
  type: types.API_V1_GROUP_DELETE_FAILED,
  error,
  starter
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})

export const api_v1_homepage_update = () => ({
  type: types.API_V1_HOMEPAGE_UPDATE
})

export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_partial_update = () => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE
})

export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_lesson_list = () => ({ type: types.API_V1_LESSON_LIST })
export const api_v1_lesson_listSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_listFailed = (error, starter) => ({
  type: types.API_V1_LESSON_LIST_FAILED,
  error,
  starter
})

export const api_v1_lesson_create = () => ({ type: types.API_V1_LESSON_CREATE })
export const api_v1_lesson_createSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_createFailed = (error, starter) => ({
  type: types.API_V1_LESSON_CREATE_FAILED,
  error,
  starter
})

export const api_v1_lesson_read = () => ({ type: types.API_V1_LESSON_READ })
export const api_v1_lesson_readSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_readFailed = (error, starter) => ({
  type: types.API_V1_LESSON_READ_FAILED,
  error,
  starter
})

export const api_v1_lesson_update = () => ({ type: types.API_V1_LESSON_UPDATE })
export const api_v1_lesson_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_updateFailed = (error, starter) => ({
  type: types.API_V1_LESSON_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_lesson_partial_update = () => ({
  type: types.API_V1_LESSON_PARTIAL_UPDATE
})

export const api_v1_lesson_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_LESSON_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_lesson_delete = () => ({ type: types.API_V1_LESSON_DELETE })
export const api_v1_lesson_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_LESSON_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_lesson_deleteFailed = (error, starter) => ({
  type: types.API_V1_LESSON_DELETE_FAILED,
  error,
  starter
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const api_v1_module_list = () => ({ type: types.API_V1_MODULE_LIST })
export const api_v1_module_listSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_listFailed = (error, starter) => ({
  type: types.API_V1_MODULE_LIST_FAILED,
  error,
  starter
})

export const api_v1_module_create = () => ({ type: types.API_V1_MODULE_CREATE })
export const api_v1_module_createSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_createFailed = (error, starter) => ({
  type: types.API_V1_MODULE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_module_read = () => ({ type: types.API_V1_MODULE_READ })
export const api_v1_module_readSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_readFailed = (error, starter) => ({
  type: types.API_V1_MODULE_READ_FAILED,
  error,
  starter
})

export const api_v1_module_update = () => ({ type: types.API_V1_MODULE_UPDATE })
export const api_v1_module_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_updateFailed = (error, starter) => ({
  type: types.API_V1_MODULE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_module_partial_update = () => ({
  type: types.API_V1_MODULE_PARTIAL_UPDATE
})

export const api_v1_module_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_MODULE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_module_delete = () => ({ type: types.API_V1_MODULE_DELETE })
export const api_v1_module_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MODULE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_module_deleteFailed = (error, starter) => ({
  type: types.API_V1_MODULE_DELETE_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_list = () => ({
  type: types.API_V1_PAYMENTMETHOD_LIST
})

export const api_v1_paymentmethod_listSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_listFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_create = () => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE
})

export const api_v1_paymentmethod_createSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_createFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_read = () => ({
  type: types.API_V1_PAYMENTMETHOD_READ
})

export const api_v1_paymentmethod_readSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_readFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_update = () => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE
})

export const api_v1_paymentmethod_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_updateFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_partial_update = () => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE
})

export const api_v1_paymentmethod_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_paymentmethod_delete = () => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE
})

export const api_v1_paymentmethod_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_paymentmethod_deleteFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_FAILED,
  error,
  starter
})

export const api_v1_recording_list = () => ({
  type: types.API_V1_RECORDING_LIST
})

export const api_v1_recording_listSucceeded = (response, starter) => ({
  type: types.API_V1_RECORDING_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_listFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_LIST_FAILED,
  error,
  starter
})

export const api_v1_recording_create = () => ({
  type: types.API_V1_RECORDING_CREATE
})

export const api_v1_recording_createSucceeded = (response, starter) => ({
  type: types.API_V1_RECORDING_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_createFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_CREATE_FAILED,
  error,
  starter
})

export const api_v1_recording_read = () => ({
  type: types.API_V1_RECORDING_READ
})

export const api_v1_recording_readSucceeded = (response, starter) => ({
  type: types.API_V1_RECORDING_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_readFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_READ_FAILED,
  error,
  starter
})

export const api_v1_recording_update = () => ({
  type: types.API_V1_RECORDING_UPDATE
})

export const api_v1_recording_updateSucceeded = (response, starter) => ({
  type: types.API_V1_RECORDING_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_updateFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_recording_partial_update = () => ({
  type: types.API_V1_RECORDING_PARTIAL_UPDATE
})

export const api_v1_recording_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_RECORDING_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_recording_delete = () => ({
  type: types.API_V1_RECORDING_DELETE
})

export const api_v1_recording_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_RECORDING_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_recording_deleteFailed = (error, starter) => ({
  type: types.API_V1_RECORDING_DELETE_FAILED,
  error,
  starter
})

export const api_v1_signup_create = () => ({ type: types.API_V1_SIGNUP_CREATE })
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})

export const api_v1_subscription_list = () => ({
  type: types.API_V1_SUBSCRIPTION_LIST
})

export const api_v1_subscription_listSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTION_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_listFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_LIST_FAILED,
  error,
  starter
})

export const api_v1_subscription_create = () => ({
  type: types.API_V1_SUBSCRIPTION_CREATE
})

export const api_v1_subscription_createSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTION_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_createFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_CREATE_FAILED,
  error,
  starter
})

export const api_v1_subscription_read = () => ({
  type: types.API_V1_SUBSCRIPTION_READ
})

export const api_v1_subscription_readSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTION_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_readFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_READ_FAILED,
  error,
  starter
})

export const api_v1_subscription_update = () => ({
  type: types.API_V1_SUBSCRIPTION_UPDATE
})

export const api_v1_subscription_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTION_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_updateFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_subscription_partial_update = () => ({
  type: types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE
})

export const api_v1_subscription_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_subscription_delete = () => ({
  type: types.API_V1_SUBSCRIPTION_DELETE
})

export const api_v1_subscription_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTION_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscription_deleteFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTION_DELETE_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_list = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_LIST
})

export const api_v1_subscriptiontype_listSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_listFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_LIST_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_create = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_CREATE
})

export const api_v1_subscriptiontype_createSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_createFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_CREATE_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_read = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_READ
})

export const api_v1_subscriptiontype_readSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_readFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_READ_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_update = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_UPDATE
})

export const api_v1_subscriptiontype_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_updateFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_partial_update = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE
})

export const api_v1_subscriptiontype_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_subscriptiontype_delete = () => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_DELETE
})

export const api_v1_subscriptiontype_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_subscriptiontype_deleteFailed = (error, starter) => ({
  type: types.API_V1_SUBSCRIPTIONTYPE_DELETE_FAILED,
  error,
  starter
})

export const rest_auth_login_create = () => ({
  type: types.REST_AUTH_LOGIN_CREATE
})

export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_change_create = () => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE
})

export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE
})

export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_confirm_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE
})

export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_create = () => ({
  type: types.REST_AUTH_REGISTRATION_CREATE
})

export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_verify_email_create = () => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE
})

export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})

export const rest_auth_user_update = () => ({
  type: types.REST_AUTH_USER_UPDATE
})

export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})

export const rest_auth_user_partial_update = () => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE
})

export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
