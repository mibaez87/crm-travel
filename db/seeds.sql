INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Let's All Go Travel Company", "Kim Figueroa", 
    "Kim@LAG.com", "EWR", "Check");

INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Musicians Tour Company", "Dan Richards", 
    "Dan@MTC.com", "IAH", "Visa");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (1, 2018-07-19, "B6 1905", "EWR", 1958,
    2018-07-22, "B6 706", "FLL", 1900, 85,
    2018-04-18, 2018-05-18, 2018-06-19);

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (1, 2018-09-07, "AS 1169", "EWR", 1745,
    2018-09-12, "AS 1162", "LAX", 0845, 110,
    2018-06-08, 2018-07-06, 2018-08-08);

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (2, 2018-08-01, "UA 676", "IAH", 1640,
    2018-08-08, "UA 1235", "DCA", 1430, 42,
    2018-05-03, 2018-06-01, 2018-07-02);

