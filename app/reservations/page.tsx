import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getReservations from "../actions/getReservations";
import getCurrentUser from "../actions/getCurrentUser";
import ReservationsClient from "./ReservationsClient";


const ReservationsPage = async () => {
    const currentUser  = await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        autherId: currentUser.id
    });

    if(reservations.length === 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your profile"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient    
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

};

export default ReservationsPage;