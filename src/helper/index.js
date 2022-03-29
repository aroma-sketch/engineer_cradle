import axios from "axios";
export const SelectData = [
  { value: "status", label: "status" },
  { value: "Unemployed", label: "Unemployed" },
  { value: "Working", label: "Working" },
  { value: "Student", label: "Student" },
  { value: "Retired", label: "Retired" },
];

export const BASE_URL = "https://intern-api.engineerscradle.com/api/ft/";
export const get_list_url = BASE_URL + "task2/view/";
export const post_url = BASE_URL + "task1/add";
export const get_footer_url = axios.get(BASE_URL + "task3/layout");
export const get_logo_url = axios.get(BASE_URL + "task3/layout/logo");
export const UNIQUE_CODE = "36shfj";
export const TOKEN_KEY = "v3p42mqQDWrg9j4gvbTrxT808n30vr5483";
