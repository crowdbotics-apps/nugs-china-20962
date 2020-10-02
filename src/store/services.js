import axios from "axios"
const signup = axios.create({
  baseURL: "https://tstcr2020092101-20512.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const signup = axios.create({
  baseURL: "https://tstcr2020092101-20512.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const nUGSCHINAAPI = axios.create({
  baseURL: "https://nugs-china-20962-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function signup_post_api_v1_signup_read(requestBody) {
  return signup.post(`/api/v1/signup`, requestBody)
}
function signup_post_api_v1_signup_read(requestBody) {
  return signup.post(`/api/v1/signup`, requestBody)
}
function api_v1_category_list() {
  return nUGSCHINAAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/category/`, requestBody)
}
function api_v1_category_read() {
  return nUGSCHINAAPI.get(`/api/v1/category/${id}/`)
}
function api_v1_category_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/category/${id}/`, requestBody)
}
function api_v1_category_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/category/${id}/`, requestBody)
}
function api_v1_category_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/category/${id}/`)
}
function api_v1_course_list() {
  return nUGSCHINAAPI.get(`/api/v1/course/`)
}
function api_v1_course_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/course/`, requestBody)
}
function api_v1_course_read() {
  return nUGSCHINAAPI.get(`/api/v1/course/${id}/`)
}
function api_v1_course_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/course/${id}/`, requestBody)
}
function api_v1_course_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/course/${id}/`, requestBody)
}
function api_v1_course_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/course/${id}/`)
}
function api_v1_customtext_list() {
  return nUGSCHINAAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return nUGSCHINAAPI.get(`/api/v1/customtext/${id}/`)
}
function api_v1_customtext_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/customtext/${id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/customtext/${id}/`, requestBody)
}
function api_v1_enrollment_list() {
  return nUGSCHINAAPI.get(`/api/v1/enrollment/`)
}
function api_v1_enrollment_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/enrollment/`, requestBody)
}
function api_v1_enrollment_read() {
  return nUGSCHINAAPI.get(`/api/v1/enrollment/${id}/`)
}
function api_v1_enrollment_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/enrollment/${id}/`, requestBody)
}
function api_v1_enrollment_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/enrollment/${id}/`, requestBody)
}
function api_v1_enrollment_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/enrollment/${id}/`)
}
function api_v1_event_list() {
  return nUGSCHINAAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/event/`, requestBody)
}
function api_v1_event_read() {
  return nUGSCHINAAPI.get(`/api/v1/event/${id}/`)
}
function api_v1_event_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/event/${id}/`, requestBody)
}
function api_v1_event_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/event/${id}/`, requestBody)
}
function api_v1_event_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/event/${id}/`)
}
function api_v1_group_list() {
  return nUGSCHINAAPI.get(`/api/v1/group/`)
}
function api_v1_group_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/group/`, requestBody)
}
function api_v1_group_read() {
  return nUGSCHINAAPI.get(`/api/v1/group/${id}/`)
}
function api_v1_group_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/group/${id}/`, requestBody)
}
function api_v1_group_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/group/${id}/`, requestBody)
}
function api_v1_group_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/group/${id}/`)
}
function api_v1_homepage_list() {
  return nUGSCHINAAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return nUGSCHINAAPI.get(`/api/v1/homepage/${id}/`)
}
function api_v1_homepage_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/homepage/${id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/homepage/${id}/`, requestBody)
}
function api_v1_lesson_list() {
  return nUGSCHINAAPI.get(`/api/v1/lesson/`)
}
function api_v1_lesson_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/lesson/`, requestBody)
}
function api_v1_lesson_read() {
  return nUGSCHINAAPI.get(`/api/v1/lesson/${id}/`)
}
function api_v1_lesson_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/lesson/${id}/`, requestBody)
}
function api_v1_lesson_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/lesson/${id}/`, requestBody)
}
function api_v1_lesson_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/lesson/${id}/`)
}
function api_v1_login_create() {
  return nUGSCHINAAPI.post(`/api/v1/login/`)
}
function api_v1_module_list() {
  return nUGSCHINAAPI.get(`/api/v1/module/`)
}
function api_v1_module_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/module/`, requestBody)
}
function api_v1_module_read() {
  return nUGSCHINAAPI.get(`/api/v1/module/${id}/`)
}
function api_v1_module_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/module/${id}/`, requestBody)
}
function api_v1_module_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/module/${id}/`, requestBody)
}
function api_v1_module_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/module/${id}/`)
}
function api_v1_paymentmethod_list() {
  return nUGSCHINAAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/paymentmethod/`, requestBody)
}
function api_v1_paymentmethod_read() {
  return nUGSCHINAAPI.get(`/api/v1/paymentmethod/${id}/`)
}
function api_v1_paymentmethod_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/paymentmethod/${id}/`, requestBody)
}
function api_v1_paymentmethod_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/paymentmethod/${id}/`, requestBody)
}
function api_v1_paymentmethod_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/paymentmethod/${id}/`)
}
function api_v1_recording_list() {
  return nUGSCHINAAPI.get(`/api/v1/recording/`)
}
function api_v1_recording_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/recording/`, requestBody)
}
function api_v1_recording_read() {
  return nUGSCHINAAPI.get(`/api/v1/recording/${id}/`)
}
function api_v1_recording_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/recording/${id}/`, requestBody)
}
function api_v1_recording_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/recording/${id}/`, requestBody)
}
function api_v1_recording_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/recording/${id}/`)
}
function api_v1_signup_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/signup/`, requestBody)
}
function api_v1_subscription_list() {
  return nUGSCHINAAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/subscription/`, requestBody)
}
function api_v1_subscription_read() {
  return nUGSCHINAAPI.get(`/api/v1/subscription/${id}/`)
}
function api_v1_subscription_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/subscription/${id}/`, requestBody)
}
function api_v1_subscription_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/subscription/${id}/`, requestBody)
}
function api_v1_subscription_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/subscription/${id}/`)
}
function api_v1_subscriptiontype_list() {
  return nUGSCHINAAPI.get(`/api/v1/subscriptiontype/`)
}
function api_v1_subscriptiontype_create(requestBody) {
  return nUGSCHINAAPI.post(`/api/v1/subscriptiontype/`, requestBody)
}
function api_v1_subscriptiontype_read() {
  return nUGSCHINAAPI.get(`/api/v1/subscriptiontype/${id}/`)
}
function api_v1_subscriptiontype_update(requestBody) {
  return nUGSCHINAAPI.put(`/api/v1/subscriptiontype/${id}/`, requestBody)
}
function api_v1_subscriptiontype_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/api/v1/subscriptiontype/${id}/`, requestBody)
}
function api_v1_subscriptiontype_delete() {
  return nUGSCHINAAPI.delete(`/api/v1/subscriptiontype/${id}/`)
}
function rest_auth_login_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return nUGSCHINAAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return nUGSCHINAAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return nUGSCHINAAPI.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return nUGSCHINAAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return nUGSCHINAAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return nUGSCHINAAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  signup_post_api_v1_signup_read,
  signup_post_api_v1_signup_read,
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_course_list,
  api_v1_course_create,
  api_v1_course_read,
  api_v1_course_update,
  api_v1_course_partial_update,
  api_v1_course_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_enrollment_list,
  api_v1_enrollment_create,
  api_v1_enrollment_read,
  api_v1_enrollment_update,
  api_v1_enrollment_partial_update,
  api_v1_enrollment_delete,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_event_read,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_delete,
  api_v1_group_list,
  api_v1_group_create,
  api_v1_group_read,
  api_v1_group_update,
  api_v1_group_partial_update,
  api_v1_group_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_lesson_list,
  api_v1_lesson_create,
  api_v1_lesson_read,
  api_v1_lesson_update,
  api_v1_lesson_partial_update,
  api_v1_lesson_delete,
  api_v1_login_create,
  api_v1_module_list,
  api_v1_module_create,
  api_v1_module_read,
  api_v1_module_update,
  api_v1_module_partial_update,
  api_v1_module_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_recording_list,
  api_v1_recording_create,
  api_v1_recording_read,
  api_v1_recording_update,
  api_v1_recording_partial_update,
  api_v1_recording_delete,
  api_v1_signup_create,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_read,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_delete,
  api_v1_subscriptiontype_list,
  api_v1_subscriptiontype_create,
  api_v1_subscriptiontype_read,
  api_v1_subscriptiontype_update,
  api_v1_subscriptiontype_partial_update,
  api_v1_subscriptiontype_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
