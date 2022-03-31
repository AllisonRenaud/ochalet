# Routes

## Auth

| Status | Method | Type              | URL        | Role |
| ------| ------ | ----------------- | ---------- | ---- |
| Done   | POST   | Public            | /login/    | \*   |
| Done   | POST   | Public            | /register/ | \*   |
|    | POST   | Public | /forgot-password/ | \*         |

## User

| Status | Method | Type    | URL              | Role              |
| -------| ------ | ------- | ---------------- | ----------------- |
| Done   | GET    | Private | /users/profile/        | seller and client |
| Done   | PATCH  | Private | /users/profile/        | seller and client |
| Done   | GET    | Private | /users/          | admin             |
| Done   | DELETE | Private | /users/{userId}/ | admin             |

## Location

| Status | Method | Type   | URL                     | Role |
| ------ | ------ | ------ | ----------------------- | ---- |
| Done   | GET    | Public | /locations/             | \*   |
| Done   | GET    | Public | /locations/{locationId} | \*   |

## Offer

| Status | Method | Type    | URL                      | Role             |
| ------ | ------ | ------- | ------------------------ | ---------------- |
| Done   | GET    | Public  | /offers/                 | \*               |
| Done   | GET    | Public  | /offers/detail/{offerId} | \*               |
| Done   | GET    | Private | /offers/my-offers/       | seller           |
| Done   | POST   | Private | /offers/                 | seller           |
| Done   | UPDATE | Private | /offers/{offerId}/       | seller           |
| Done   | DELETE | Private | /offers/{offerId}/       | seller and admin |

## Booking

| Method | Type    | URL                    | Role              |
| ------ | ------- | ---------------------- | ----------------- |
| GET    | Private | /bookings/my-bookings/ | client and seller |
| POST   | Private | /bookings/             | client            |
| PATCH  | Private | /bookings/{bookingId}/ | seller            |
