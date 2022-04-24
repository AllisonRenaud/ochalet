#

USER(__user_id__, first_name, last_name, email, password, role) 
 
BOOKING(__booking_id__, date_start, date_end, status, #user_id, #offer_id)
 
OFFER(__offer_id__, title, complement, description, zip_code, city_name, country, street_name, street_number, price, main_picture, media, status, people_capacity, rooms, bathrooms, pets, tv, wifi, cleaning, breakfast, #location_id, #user_id)
 
LOCATION(__location_id__, name, image, status)