import datetime

TIME_PERIOD = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

def Diff(li1, li2):
    return (list(list(set(li1)-set(li2)) + list(set(li2)-set(li1))))

def checkAvailableTimePeriod(orders):
    occupiedPeriod = list()
    for order in orders:
        occupiedPeriod.append(order.date_time.time().strftime("%H:%M"))
    print(occupiedPeriod)
    return Diff(TIME_PERIOD, occupiedPeriod)
