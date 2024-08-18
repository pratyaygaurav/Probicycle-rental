import List from "../../components/bikes/List";
import FormComplete from "../../components/bikes/FormComplet";
import LayoutPublic from "../../components/layouts/LayoutPublic";
import RentalSuccess from "../../components/bikes/RentalSuccess";


export const route_nav = [
    {
        path: "/*",
        element: LayoutPublic,
        exact: false,

        routes: [
            {
                path: "/",
                element: List,
                exact: true
            },
            {
                path: "/complete-rent/:id",
                element: FormComplete,
                exact: true
            },
            {
                path: "/success",
                element: RentalSuccess,
                exact: true
            }
        ]
    }
];
