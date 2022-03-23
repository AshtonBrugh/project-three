import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS = gql`
    query all_products {
        all_products {
            _id
            title
            description
            image
            seller{
                _id
                username
            }
            postdate
            salestart
            salelength
            startingprice
            categories
            checkactive{
                active
                start
                end
            }
            username
            reviews {
                content
                username
            }
        }
    }
`;

export const QUERY_PRODUCT = gql`
    query product($id: ID) {
        product(_id: $id) {
            _id
            title
            description
            image
            seller{
                _id
                username
            }
            postdate
            salestart
            salelength
            startingprice
            categories
            checkactive {
                active
                start
                end
            }
            username
            reviews {
                content
                username
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me{
        me {
            _id
            username
            email
        }
    }
`;
