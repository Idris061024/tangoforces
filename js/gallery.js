const galleryPhotos = [
    // Matchday Pictures
    { id: 1, type: 'image', src: '../images/players/player-1.jpg', title: 'Match Victory', category: 'pictures', subcategory: 'matchday' },
    { id: 3, type: 'image', src: '../images/players/player-3.jpg', title: 'Cup Final', category: 'pictures', subcategory: 'matchday' },
    { id: 7, type: 'image', src: '../images/players/player-7.jpg', title: 'League Match', category: 'pictures', subcategory: 'matchday' },
    
    // Champions Celebrations Pictures - MOSSL Images
    { id: 100, type: 'image', src: '../images/mossl/IMG_3505.jpg', title: 'MOSSL Celebration - IMG_3505', category: 'pictures', subcategory: 'champions' },
    { id: 101, type: 'image', src: '../images/mossl/IMG_3506.jpg', title: 'MOSSL Celebration - IMG_3506', category: 'pictures', subcategory: 'champions' },
    { id: 102, type: 'image', src: '../images/mossl/IMG_3507.jpg', title: 'MOSSL Celebration - IMG_3507', category: 'pictures', subcategory: 'champions' },
    { id: 103, type: 'image', src: '../images/mossl/IMG_3508.jpg', title: 'MOSSL Celebration - IMG_3508', category: 'pictures', subcategory: 'champions' },
    { id: 104, type: 'image', src: '../images/mossl/IMG_3509.jpg', title: 'MOSSL Celebration - IMG_3509', category: 'pictures', subcategory: 'champions' },
    { id: 105, type: 'image', src: '../images/mossl/IMG_3510.jpg', title: 'MOSSL Celebration - IMG_3510', category: 'pictures', subcategory: 'champions' },
    { id: 106, type: 'image', src: '../images/mossl/IMG_3511.jpg', title: 'MOSSL Celebration - IMG_3511', category: 'pictures', subcategory: 'champions' },
    { id: 107, type: 'image', src: '../images/mossl/IMG_3512.jpg', title: 'MOSSL Celebration - IMG_3512', category: 'pictures', subcategory: 'champions' },
    { id: 108, type: 'image', src: '../images/mossl/IMG_3513.jpg', title: 'MOSSL Celebration - IMG_3513', category: 'pictures', subcategory: 'champions' },
    { id: 109, type: 'image', src: '../images/mossl/IMG_3517.jpg', title: 'MOSSL Celebration - IMG_3517', category: 'pictures', subcategory: 'champions' },
    { id: 110, type: 'image', src: '../images/mossl/IMG_3518.jpg', title: 'MOSSL Celebration - IMG_3518', category: 'pictures', subcategory: 'champions' },
    { id: 111, type: 'image', src: '../images/mossl/IMG_3519.jpg', title: 'MOSSL Celebration - IMG_3519', category: 'pictures', subcategory: 'champions' },
    { id: 112, type: 'image', src: '../images/mossl/IMG_3520.jpg', title: 'MOSSL Celebration - IMG_3520', category: 'pictures', subcategory: 'champions' },
    { id: 113, type: 'image', src: '../images/mossl/IMG_3521.jpg', title: 'MOSSL Celebration - IMG_3521', category: 'pictures', subcategory: 'champions' },
    { id: 114, type: 'image', src: '../images/mossl/IMG_3522.jpg', title: 'MOSSL Celebration - IMG_3522', category: 'pictures', subcategory: 'champions' },
    { id: 115, type: 'image', src: '../images/mossl/IMG_3523.jpg', title: 'MOSSL Celebration - IMG_3523', category: 'pictures', subcategory: 'champions' },
    { id: 116, type: 'image', src: '../images/mossl/IMG_3530.jpg', title: 'MOSSL Celebration - IMG_3530', category: 'pictures', subcategory: 'champions' },
    { id: 117, type: 'image', src: '../images/mossl/IMG_3531.jpg', title: 'MOSSL Celebration - IMG_3531', category: 'pictures', subcategory: 'champions' },
    { id: 118, type: 'image', src: '../images/mossl/IMG_3532.jpg', title: 'MOSSL Celebration - IMG_3532', category:'pictures' , subcategory:'champions'},
    { id : 119, type : "image", src : "../images/mossl/IMG_3534.jpg", title : "MOSSL Celebration - IMG_3534", category : "pictures", subcategory : "champions" },
    { id: 120, type: 'image', src: '../images/mossl/IMG_3535.jpg', title: 'MOSSL Celebration - IMG_3535', category: 'pictures', subcategory: 'champions' },
    { id: 121, type: 'image', src: '../images/mossl/IMG_3536.jpg', title: 'MOSSL Celebration - IMG_3536', category: 'pictures', subcategory: 'champions' },
    { id: 122, type: 'image', src: '../images/mossl/IMG_3537.jpg', title: 'MOSSL Celebration - IMG_3537', category: 'pictures', subcategory: 'champions' },
    { id: 123, type: 'image', src: '../images/mossl/IMG_3538.jpg', title: 'MOSSL Celebration - IMG_3538', category: 'pictures', subcategory: 'champions' },
    { id: 124, type: 'image', src: '../images/mossl/IMG_3539.jpg', title: 'MOSSL Celebration - IMG_3539', category: 'pictures', subcategory: 'champions' },
    { id: 122, type: 'image', src: '../images/mossl/IMG_3540.jpg', title: 'MOSSL Celebration - IMG_3540', category: 'pictures', subcategory: 'champions' },
    { id: 123, type: 'image', src: '../images/mossl/IMG_3541.jpg', title: 'MOSSL Celebration - IMG_3541', category: 'pictures', subcategory: 'champions' },
    { id: 124, type: 'image', src: '../images/mossl/IMG_3542.jpg', title: 'MOSSL Celebration - IMG_3542', category: 'pictures', subcategory: 'champions' },
    { id: 125, type: 'image', src: '../images/mossl/IMG_3546.jpg', title: 'MOSSL Celebration - IMG_3546', category: 'pictures', subcategory: 'champions' },
    { id: 126, type: 'image', src: '../images/mossl/IMG_3547.jpg', title: 'MOSSL Celebration - IMG_3547', category: 'pictures', subcategory: 'champions' },
    { id: 127, type: 'image', src: '../images/mossl/IMG_3548.jpg', title: 'MOSSL Celebration - IMG_3548', category: 'pictures', subcategory: 'champions' },
    { id: 128, type: 'image', src: '../images/mossl/IMG_3549.jpg', title: 'MOSSL Celebration - IMG_3549', category: 'pictures', subcategory: 'champions' },
    { id: 129, type: 'image', src: '../images/mossl/IMG_3550.jpg', title: 'MOSSL Celebration - IMG_3550', category: 'pictures', subcategory: 'champions' },
    { id: 130, type: 'image', src: '../images/mossl/IMG_3551.jpg', title: 'MOSSL Celebration - IMG_3551', category: 'pictures', subcategory: 'champions' },
    { id: 131, type: 'image', src: '../images/mossl/IMG_3552.jpg', title: 'MOSSL Celebration - IMG_3552', category: 'pictures', subcategory: 'champions' },
    { id: 132, type: 'image', src: '../images/mossl/IMG_3553.jpg', title: 'MOSSL Celebration - IMG_3553', category: 'pictures', subcategory: 'champions' },
    { id: 133, type: 'image', src: '../images/mossl/IMG_3554.jpg', title: 'MOSSL Celebration - IMG_3554', category: 'pictures', subcategory: 'champions' },
    { id: 134, type: 'image', src: '../images/mossl/IMG_3556.jpg', title: 'MOSSL Celebration - IMG_3556', category: 'pictures', subcategory: 'champions' },
    { id: 135, type: 'image', src: '../images/mossl/IMG_3557.jpg', title: 'MOSSL Celebration - IMG_3557', category: 'pictures', subcategory: 'champions' },
    { id: 136, type: 'image', src: '../images/mossl/IMG_3558.jpg', title: 'MOSSL Celebration - IMG_3558', category: 'pictures', subcategory: 'champions' },
    { id: 137, type: 'image', src: '../images/mossl/IMG_3559.jpg', title: 'MOSSL Celebration - IMG_3559', category: 'pictures', subcategory: 'champions' },
    { id: 138, type: 'image', src: '../images/mossl/IMG_3560.jpg', title: 'MOSSL Celebration - IMG_3560', category: 'pictures', subcategory: 'champions' },
    { id: 139, type: 'image', src: '../images/mossl/IMG_3561.jpg', title: 'MOSSL Celebration - IMG_3561', category: 'pictures', subcategory: 'champions' },
    { id: 140, type: 'image', src: '../images/mossl/IMG_3563.jpg', title: 'MOSSL Celebration - IMG_3563', category: 'pictures', subcategory: 'champions' },
    { id: 141, type: 'image', src: '../images/mossl/IMG_3564.jpg', title: 'MOSSL Celebration - IMG_3564', category: 'pictures', subcategory: 'champions' },
    { id: 142, type: 'image', src: '../images/mossl/IMG_3565.jpg', title: 'MOSSL Celebration - IMG_3565', category: 'pictures', subcategory: 'champions' },
    { id: 143, type: 'image', src: '../images/mossl/IMG_3567.jpg', title: 'MOSSL Celebration - IMG_3567', category: 'pictures', subcategory: 'champions' },
    { id: 144, type: 'image', src: '../images/mossl/IMG_3568.jpg', title: 'MOSSL Celebration - IMG_3568', category: 'pictures', subcategory: 'champions' },
    { id: 145, type: 'image', src: '../images/mossl/IMG_3569.jpg', title: 'MOSSL Celebration - IMG_3569', category: 'pictures', subcategory: 'champions' },
    { id: 146, type: 'image', src: '../images/mossl/IMG_3570.jpg', title: 'MOSSL Celebration - IMG_3570', category: 'pictures', subcategory: 'champions' },
    { id: 147, type: 'image', src: '../images/mossl/IMG_3571.jpg', title: 'MOSSL Celebration - IMG_3571', category: 'pictures', subcategory: 'champions' },
    { id: 148, type: 'image', src: '../images/mossl/IMG_3572.jpg', title: 'MOSSL Celebration - IMG_3572', category: 'pictures', subcategory: 'champions' },
    { id: 149, type: 'image', src: '../images/mossl/IMG_3575.jpg', title: 'MOSSL Celebration - IMG_3575', category: 'pictures', subcategory: 'champions' },
    { id: 150, type: 'image', src: '../images/mossl/IMG_3576.jpg', title: 'MOSSL Celebration - IMG_3576', category: 'pictures', subcategory: 'champions' },
    { id: 151, type: 'image', src: '../images/mossl/IMG_3577.jpg', title: 'MOSSL Celebration - IMG_3577', category: 'pictures', subcategory: 'champions' },
    { id: 152, type: 'image', src: '../images/mossl/IMG_3578.jpg', title: 'MOSSL Celebration - IMG_3578', category: 'pictures', subcategory: 'champions' },
    { id: 153, type: 'image', src: '../images/mossl/IMG_3579.jpg', title: 'MOSSL Celebration - IMG_3579', category: 'pictures', subcategory: 'champions' },
    { id: 154, type: 'image', src: '../images/mossl/IMG_3580.jpg', title: 'MOSSL Celebration - IMG_3580', category: 'pictures', subcategory: 'champions' },
    { id: 155, type: 'image', src: '../images/mossl/IMG_3581.jpg', title: 'MOSSL Celebration - IMG_3581', category: 'pictures', subcategory: 'champions' },
    { id: 156, type: 'image', src: '../images/mossl/IMG_3585.jpg', title: 'MOSSL Celebration - IMG_3585', category: 'pictures', subcategory: 'champions' },
    { id: 157, type: 'image', src: '../images/mossl/IMG_3588.jpg', title: 'MOSSL Celebration - IMG_3588', category: 'pictures', subcategory: 'champions' },
    { id: 158, type: 'image', src: '../images/mossl/IMG_3589.jpg', title: 'MOSSL Celebration - IMG_3589', category: 'pictures', subcategory: 'champions' },
    { id: 159, type: 'image', src: '../images/mossl/IMG_3590.jpg', title: 'MOSSL Celebration - IMG_3590', category: 'pictures', subcategory: 'champions' },
    { id: 160, type: 'image', src: '../images/mossl/IMG_3591.jpg', title: 'MOSSL Celebration - IMG_3591', category: 'pictures', subcategory: 'champions' },
    { id: 161, type: 'image', src: '../images/mossl/IMG_3592.jpg', title: 'MOSSL Celebration - IMG_3592', category: 'pictures', subcategory: 'champions' },
    { id: 162, type: 'image', src: '../images/mossl/IMG_3593.jpg', title: 'MOSSL Celebration - IMG_3593', category: 'pictures', subcategory: 'champions' },
    { id: 163, type: 'image', src: '../images/mossl/IMG_3594.jpg', title: 'MOSSL Celebration - IMG_3594', category: 'pictures', subcategory: 'champions' },
    { id: 164, type: 'image', src: '../images/mossl/IMG_3595.jpg', title: 'MOSSL Celebration - IMG_3595', category: 'pictures', subcategory: 'champions' },
    { id: 165, type: 'image', src: '../images/mossl/IMG_3599.jpg', title: 'MOSSL Celebration - IMG_3599', category: 'pictures', subcategory: 'champions' },
    { id: 166, type: 'image', src: '../images/mossl/IMG_3600.jpg', title: 'MOSSL Celebration - IMG_3600', category: 'pictures', subcategory: 'champions' },
    { id: 167, type: 'image', src: '../images/mossl/IMG_3601.jpg', title: 'MOSSL Celebration - IMG_3601', category: 'pictures', subcategory: 'champions' },
    { id: 168, type: 'image', src: '../images/mossl/IMG_3602.jpg', title: 'MOSSL Celebration - IMG_3602', category: 'pictures', subcategory: 'champions' },
    { id: 169, type: 'image', src: '../images/mossl/IMG_3603.jpg', title: 'MOSSL Celebration - IMG_3603', category: 'pictures', subcategory: 'champions' },
    { id: 170, type: 'image', src: '../images/mossl/IMG_3604.jpg', title: 'MOSSL Celebration - IMG_3604', category: 'pictures', subcategory: 'champions' },
    { id: 171, type: 'image', src: '../images/mossl/IMG_3605.jpg', title: 'MOSSL Celebration - IMG_3605', category: 'pictures', subcategory: 'champions' },
    { id: 172, type: 'image', src: '../images/mossl/IMG_3606.jpg', title: 'MOSSL Celebration - IMG_3606', category: 'pictures', subcategory: 'champions' },
    { id: 173, type: 'image', src: '../images/mossl/IMG_3608.jpg', title: 'MOSSL Celebration - IMG_3608', category: 'pictures', subcategory: 'champions' },
    { id: 174, type: 'image', src: '../images/mossl/IMG_3609.jpg', title: 'MOSSL Celebration - IMG_3609', category: 'pictures', subcategory: 'champions' },
    { id: 175, type: 'image', src: '../images/mossl/IMG_3610.jpg', title: 'MOSSL Celebration - IMG_3610', category: 'pictures', subcategory: 'champions' },
    { id: 176, type: 'image', src: '../images/mossl/IMG_3611.jpg', title: 'MOSSL Celebration - IMG_3611', category: 'pictures', subcategory: 'champions' },
    { id: 177, type: 'image', src: '../images/mossl/IMG_3612.jpg', title: 'MOSSL Celebration - IMG_3612', category: 'pictures', subcategory: 'champions' },
    { id: 178, type: 'image', src: '../images/mossl/IMG_3613.jpg', title: 'MOSSL Celebration - IMG_3613', category: 'pictures', subcategory: 'champions' },
    { id: 179, type: 'image', src: '../images/mossl/IMG_3614.jpg', title: 'MOSSL Celebration - IMG_3614', category: 'pictures', subcategory: 'champions' },
    { id: 180, type: 'image', src: '../images/mossl/IMG_3617.jpg', title: 'MOSSL Celebration - IMG_3617', category: 'pictures', subcategory: 'champions' },
    { id: 181, type: 'image', src: '../images/mossl/IMG_3618.jpg', title: 'MOSSL Celebration - IMG_3618', category: 'pictures', subcategory: 'champions' },
    { id: 182, type: 'image', src: '../images/mossl/IMG_3619.jpg', title: 'MOSSL Celebration - IMG_3619', category: 'pictures', subcategory: 'champions' },
    { id: 183, type: 'image', src: '../images/mossl/IMG_3620.jpg', title: 'MOSSL Celebration - IMG_3620', category: 'pictures', subcategory: 'champions' },
    { id: 184, type: 'image', src: '../images/mossl/IMG_3621.jpg', title: 'MOSSL Celebration - IMG_3621', category: 'pictures', subcategory: 'champions' },
    { id: 185, type: 'image', src: '../images/mossl/IMG_3622.jpg', title: 'MOSSL Celebration - IMG_3622', category: 'pictures', subcategory: 'champions' },
    { id: 186, type: 'image', src: '../images/mossl/IMG_3623.jpg', title: 'MOSSL Celebration - IMG_3623', category: 'pictures', subcategory: 'champions' },
    { id: 187, type: 'image', src: '../images/mossl/IMG_3624.jpg', title: 'MOSSL Celebration - IMG_3624', category: 'pictures', subcategory: 'champions' },
    { id: 188, type: 'image', src: '../images/mossl/IMG_3625.jpg', title: 'MOSSL Celebration - IMG_3625', category: 'pictures', subcategory: 'champions' },
    { id: 189, type: 'image', src: '../images/mossl/IMG_3626.jpg', title: 'MOSSL Celebration - IMG_3626', category: 'pictures', subcategory: 'champions' },
    { id: 190, type: 'image', src: '../images/mossl/IMG_3627.jpg', title: 'MOSSL Celebration - IMG_3627', category: 'pictures', subcategory: 'champions' },
    { id: 191, type: 'image', src: '../images/mossl/IMG_3628.jpg', title: 'MOSSL Celebration - IMG_3628', category: 'pictures', subcategory: 'champions' },
    { id: 192, type: 'image', src: '../images/mossl/IMG_3629.jpg', title: 'MOSSL Celebration - IMG_3629', category: 'pictures', subcategory: 'champions' },
    { id: 193, type: 'image', src: '../images/mossl/IMG_3630.jpg', title: 'MOSSL Celebration - IMG_3630', category: 'pictures', subcategory: 'champions' },
    { id: 194, type: 'image', src: '../images/mossl/IMG_3631.jpg', title: 'MOSSL Celebration - IMG_3631', category: 'pictures', subcategory: 'champions' },
    { id: 195, type: 'image', src: '../images/mossl/IMG_3632.jpg', title: 'MOSSL Celebration - IMG_3632', category: 'pictures', subcategory: 'champions' },
    { id: 196, type: 'image', src: '../images/mossl/IMG_3633.jpg', title: 'MOSSL Celebration - IMG_3633', category: 'pictures', subcategory: 'champions' },
    { id: 197, type: 'image', src: '../images/mossl/IMG_3634.jpg', title: 'MOSSL Celebration - IMG_3634', category: 'pictures', subcategory: 'champions' },
    { id: 198, type: 'image', src: '../images/mossl/IMG_3635.jpg', title: 'MOSSL Celebration - IMG_3635', category: 'pictures', subcategory: 'champions' },
    { id: 199, type: 'image', src: '../images/mossl/IMG_3636.jpg', title: 'MOSSL Celebration - IMG_3636', category: 'pictures', subcategory: 'champions' },
    { id: 200, type: 'image', src: '../images/mossl/IMG_3637.jpg', title: 'MOSSL Celebration - IMG_3637', category: 'pictures', subcategory: 'champions' },
    { id: 201, type: 'image', src: '../images/mossl/IMG_3638.jpg', title: 'MOSSL Celebration - IMG_3638', category: 'pictures', subcategory: 'champions' },
    { id: 202, type: 'image', src: '../images/mossl/IMG_3639.jpg', title: 'MOSSL Celebration - IMG_3639', category: 'pictures', subcategory: 'champions' },
    { id: 203, type: 'image', src: '../images/mossl/IMG_3640.jpg', title: 'MOSSL Celebration - IMG_3640', category: 'pictures', subcategory: 'champions' },
    { id: 204, type: 'image', src: '../images/mossl/IMG_3641.jpg', title: 'MOSSL Celebration - IMG_3641', category: 'pictures', subcategory: 'champions' },
    { id: 205, type: 'image', src: '../images/mossl/IMG_3642.jpg', title: 'MOSSL Celebration - IMG_3642', category: 'pictures', subcategory: 'champions' },
    { id: 206, type: 'image', src: '../images/mossl/IMG_3643.jpg', title: 'MOSSL Celebration - IMG_3643', category: 'pictures', subcategory: 'champions' },
    { id: 207, type: 'image', src: '../images/mossl/IMG_3644.jpg', title: 'MOSSL Celebration - IMG_3644', category: 'pictures', subcategory: 'champions' },
    { id: 208, type: 'image', src: '../images/mossl/IMG_3645.jpg', title: 'MOSSL Celebration - IMG_3645', category: 'pictures', subcategory: 'champions' },
    { id: 209, type: 'image', src: '../images/mossl/IMG_3646.jpg', title: 'MOSSL Celebration - IMG_3646', category: 'pictures', subcategory: 'champions' },
    { id: 210, type: 'image', src: '../images/mossl/IMG_3647.jpg', title: 'MOSSL Celebration - IMG_3647', category: 'pictures', subcategory: 'champions' },
    { id: 211, type: 'image', src: '../images/mossl/IMG_3648.jpg', title: 'MOSSL Celebration - IMG_3648', category: 'pictures', subcategory: 'champions' },
    { id: 212, type: 'image', src: '../images/mossl/IMG_3649.jpg', title: 'MOSSL Celebration - IMG_3649', category: 'pictures', subcategory: 'champions' },
    { id: 213, type: 'image', src: '../images/mossl/IMG_3650.jpg', title: 'MOSSL Celebration - IMG_3650', category: 'pictures', subcategory: 'champions' },
    { id: 214, type: 'image', src: '../images/mossl/IMG_3651.jpg', title: 'MOSSL Celebration - IMG_3651', category: 'pictures', subcategory: 'champions' },
    { id: 215, type: 'image', src: '../images/mossl/IMG_3652.jpg', title: 'MOSSL Celebration - IMG_3652', category: 'pictures', subcategory: 'champions' },
    { id: 216, type: 'image', src: '../images/mossl/IMG_3653.jpg', title: 'MOSSL Celebration - IMG_3653', category: 'pictures', subcategory: 'champions' },
    { id: 217, type: 'image', src: '../images/mossl/IMG_3654.jpg', title: 'MOSSL Celebration - IMG_3654', category: 'pictures', subcategory: 'champions' },
    { id: 218, type: 'image', src: '../images/mossl/IMG_3655.jpg', title: 'MOSSL Celebration - IMG_3655', category: 'pictures', subcategory: 'champions' },
    { id: 219, type: 'image', src: '../images/mossl/IMG_3656.jpg', title: 'MOSSL Celebration - IMG_3656', category: 'pictures', subcategory: 'champions' },
    { id: 220, type: 'image', src: '../images/mossl/IMG_3657.jpg', title: 'MOSSL Celebration - IMG_3657', category: 'pictures', subcategory: 'champions' },
    { id: 221, type: 'image', src: '../images/mossl/IMG_3658.jpg', title: 'MOSSL Celebration - IMG_3658', category: 'pictures', subcategory: 'champions' },
    { id: 222, type: 'image', src: '../images/mossl/IMG_3659.jpg', title: 'MOSSL Celebration - IMG_3659', category: 'pictures', subcategory: 'champions' },
    { id: 223, type: 'image', src: '../images/mossl/IMG_3660.jpg', title: 'MOSSL Celebration - IMG_3660', category: 'pictures', subcategory: 'champions' },
    { id: 224, type: 'image', src: '../images/mossl/IMG_3661.jpg', title: 'MOSSL Celebration - IMG_3661', category: 'pictures', subcategory: 'champions' },
    { id: 225, type: 'image', src: '../images/mossl/IMG_3662.jpg', title: 'MOSSL Celebration - IMG_3662', category: 'pictures', subcategory: 'champions' },
    { id: 226, type: 'image', src: '../images/mossl/IMG_3663.jpg', title: 'MOSSL Celebration - IMG_3663', category: 'pictures', subcategory: 'champions' },
    { id: 227, type: 'image', src: '../images/mossl/IMG_3664.jpg', title: 'MOSSL Celebration - IMG_3664', category: 'pictures', subcategory: 'champions' },
    { id: 228, type: 'image', src: '../images/mossl/IMG_3665.jpg', title: 'MOSSL Celebration - IMG_3665', category: 'pictures', subcategory: 'champions' },
    { id: 229, type: 'image', src: '../images/mossl/IMG_3666.jpg', title: 'MOSSL Celebration - IMG_3666', category: 'pictures', subcategory: 'champions' },
    { id: 230, type: 'image', src: '../images/mossl/IMG_3667.jpg', title: 'MOSSL Celebration - IMG_3667', category: 'pictures', subcategory: 'champions' },
    { id: 231, type: 'image', src: '../images/mossl/IMG_3668.jpg', title: 'MOSSL Celebration - IMG_3668', category: 'pictures', subcategory: 'champions' },
    { id: 232, type: 'image', src: '../images/mossl/IMG_3669.jpg', title: 'MOSSL Celebration - IMG_3669', category: 'pictures', subcategory: 'champions' },
    { id: 233, type: 'image', src: '../images/mossl/IMG_3670.jpg', title: 'MOSSL Celebration - IMG_3670', category: 'pictures', subcategory: 'champions' },
    { id: 234, type: 'image', src: '../images/mossl/IMG_3671.jpg', title: 'MOSSL Celebration - IMG_3671', category: 'pictures', subcategory: 'champions' },
    
    // Matchday Videos
    { id: 2, type: 'video', src: '../images/players/tango2.mov', title: 'Matchday Highlights', category: 'videos', subcategory: 'matchday' },
    
    // Champions Celebrations Videos
    { id: 6, type: 'video', src: '../images/players/tango2.mov', title: 'Team Celebration 1', category: 'videos', subcategory: 'champions' },
    { id: 10, type: 'video', src: '../images/players/tango1.mov', title: 'Team Celebration 2', category: 'videos', subcategory: 'champions' }
];

const displayGalleryInGrid = (photos, gridId) => {
    const container = document.getElementById(gridId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (photos.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No items in this section</p>';
        return;
    }

    photos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        if (photo.type === 'video') {
            item.innerHTML = `
                <video class="gallery-thumb" src="${photo.src}" muted playsinline preload="metadata" onclick="openLightboxVideo('${photo.src}')"></video>
                <div class="play-overlay">▶</div>
                <p>${photo.title}</p>
            `;
        } else {
            item.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" onclick="openLightbox('${photo.src}')">
                <p>${photo.title}</p>
            `;
        }
        container.appendChild(item);
    });
};

const displayGallery = () => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type'); // 'videos' or 'pictures'
    const sub = urlParams.get('sub'); // 'matchday' or 'champions'

    // Update page title and description
    const titleEl = document.getElementById('galleryTitle');
    const descEl = document.getElementById('galleryDescription');
    
    if (type === 'videos') {
        if (sub === 'matchday') {
            titleEl.textContent = 'Matchday Videos';
            descEl.textContent = 'Videos from matchday events';
        } else if (sub === 'champions') {
            titleEl.textContent = 'Champions Celebration Videos';
            descEl.textContent = 'Videos from the 2025/26 MOSSL Champions celebrations';
        } else {
            titleEl.textContent = 'Club Videos';
            descEl.textContent = 'Videos from matches and team events';
        }
    } else if (type === 'pictures') {
        if (sub === 'matchday') {
            titleEl.textContent = 'Matchday Pictures';
            descEl.textContent = 'Photos from matchday events';
        } else if (sub === 'champions') {
            titleEl.textContent = 'Champions Celebration Pictures';
            descEl.textContent = 'Photos from the 2025/26 MOSSL Champions celebrations';
        } else {
            titleEl.textContent = 'Club Pictures';
            descEl.textContent = 'Photos from matches and team events';
        }
    } else {
        titleEl.textContent = 'Club Gallery';
        descEl.textContent = 'Photos and videos from matches and team events';
    }

    // Filter photos based on URL params
    let filteredPhotos = galleryPhotos;
    if (type) {
        filteredPhotos = filteredPhotos.filter(p => p.category === type);
    }
    if (sub) {
        filteredPhotos = filteredPhotos.filter(p => p.subcategory === sub);
    }

    // If no filters, show all
    if (!type && !sub) {
        const matchdayVideos = galleryPhotos.filter(p => p.category === 'videos' && p.subcategory === 'matchday');
        const celebrationsVideos = galleryPhotos.filter(p => p.category === 'videos' && p.subcategory === 'champions');
        const matchdayPictures = galleryPhotos.filter(p => p.category === 'pictures' && p.subcategory === 'matchday');
        const celebrationsPictures = galleryPhotos.filter(p => p.category === 'pictures' && p.subcategory === 'champions');
        
        displayGalleryInGrid(matchdayVideos, 'matchdayVideosGrid');
        displayGalleryInGrid(celebrationsVideos, 'celebrationsVideosGrid');
        displayGalleryInGrid(matchdayPictures, 'matchdayPicturesGrid');
        displayGalleryInGrid(celebrationsPictures, 'celebrationsPicturesGrid');
        
        // Show both sections
        document.querySelectorAll('.gallery-section').forEach(section => {
            section.style.display = 'block';
        });
        
        // Set container to two columns
        document.querySelector('.gallery-container').style.gridTemplateColumns = '1fr 1fr';
    } else {
        // Hide all sections first
        document.querySelectorAll('.gallery-section').forEach(section => {
            section.style.display = 'none';
        });

        // Set container to single column (full width)
        document.querySelector('.gallery-container').style.gridTemplateColumns = '1fr';
        
        // Show only the relevant section
        if (type === 'videos') {
            document.querySelector('.gallery-section:nth-child(1)').style.display = 'block';
            // Expand the videos section
            const videosSection = document.querySelector('.gallery-section:nth-child(1)');
            videosSection.querySelector('.section-content').style.display = 'block';
            videosSection.querySelector('.section-title').textContent = '▼ Videos';
            
            // Filter and display based on sub
            if (sub === 'matchday') {
                const matchdayVideos = filteredPhotos.filter(p => p.subcategory === 'matchday');
                displayGalleryInGrid(matchdayVideos, 'matchdayVideosGrid');
                // Show only matchday subsection
                videosSection.querySelectorAll('.subsection')[0].querySelector('.subsection-content').style.display = 'grid';
                videosSection.querySelectorAll('.subsection')[0].querySelector('.subsection-title').classList.add('open');
                videosSection.querySelectorAll('.subsection')[1].querySelector('.subsection-content').style.display = 'none';
                videosSection.querySelectorAll('.subsection')[1].querySelector('.subsection-title').classList.remove('open');
            } else if (sub === 'champions') {
                const celebrationsVideos = filteredPhotos.filter(p => p.subcategory === 'champions');
                displayGalleryInGrid(celebrationsVideos, 'celebrationsVideosGrid');
                // Show only celebrations subsection
                videosSection.querySelectorAll('.subsection')[0].querySelector('.subsection-content').style.display = 'none';
                videosSection.querySelectorAll('.subsection')[0].querySelector('.subsection-title').classList.remove('open');
                videosSection.querySelectorAll('.subsection')[1].querySelector('.subsection-content').style.display = 'grid';
                videosSection.querySelectorAll('.subsection')[1].querySelector('.subsection-title').classList.add('open');
            } else {
                // Show all videos
                const matchdayVideos = galleryPhotos.filter(p => p.category === 'videos' && p.subcategory === 'matchday');
                const celebrationsVideos = galleryPhotos.filter(p => p.category === 'videos' && p.subcategory === 'champions');
                displayGalleryInGrid(matchdayVideos, 'matchdayVideosGrid');
                displayGalleryInGrid(celebrationsVideos, 'celebrationsVideosGrid');
            }
        } else if (type === 'pictures') {
            document.querySelector('.gallery-section:nth-child(2)').style.display = 'block';
            // Similar logic for pictures
            const picturesSection = document.querySelector('.gallery-section:nth-child(2)');
            picturesSection.querySelector('.section-content').style.display = 'block';
            picturesSection.querySelector('.section-title').textContent = '▼ Pictures';
            
            if (sub === 'matchday') {
                const matchdayPictures = filteredPhotos.filter(p => p.subcategory === 'matchday');
                displayGalleryInGrid(matchdayPictures, 'matchdayPicturesGrid');
                picturesSection.querySelectorAll('.subsection')[0].querySelector('.subsection-content').style.display = 'grid';
                picturesSection.querySelectorAll('.subsection')[0].querySelector('.subsection-title').classList.add('open');
                picturesSection.querySelectorAll('.subsection')[1].querySelector('.subsection-content').style.display = 'none';
                picturesSection.querySelectorAll('.subsection')[1].querySelector('.subsection-title').classList.remove('open');
            } else if (sub === 'champions') {
                const celebrationsPictures = filteredPhotos.filter(p => p.subcategory === 'champions');
                displayGalleryInGrid(celebrationsPictures, 'celebrationsPicturesGrid');
                picturesSection.querySelectorAll('.subsection')[0].querySelector('.subsection-content').style.display = 'none';
                picturesSection.querySelectorAll('.subsection')[0].querySelector('.subsection-title').classList.remove('open');
                picturesSection.querySelectorAll('.subsection')[1].querySelector('.subsection-content').style.display = 'grid';
                picturesSection.querySelectorAll('.subsection')[1].querySelector('.subsection-title').classList.add('open');
            } else {
                const matchdayPictures = galleryPhotos.filter(p => p.category === 'pictures' && p.subcategory === 'matchday');
                const celebrationsPictures = galleryPhotos.filter(p => p.category === 'pictures' && p.subcategory === 'champions');
                displayGalleryInGrid(matchdayPictures, 'matchdayPicturesGrid');
                displayGalleryInGrid(celebrationsPictures, 'celebrationsPicturesGrid');
            }
        }
    }
};

const openLightbox = (src) => {
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightboxImage');
    const video = document.getElementById('lightboxVideo');
    // show image, hide video
    video.pause();
    video.style.display = 'none';
    image.style.display = 'block';
    image.src = src;
    lightbox.style.display = 'flex';
};

const openLightboxVideo = (src) => {
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightboxImage');
    const video = document.getElementById('lightboxVideo');
    image.style.display = 'none';
    video.style.display = 'block';
    video.src = src;
    video.currentTime = 0;
    video.play().catch(() => {});
    lightbox.style.display = 'flex';
};

const closeLightbox = () => {
    document.getElementById('lightbox').style.display = 'none';
};

const toggleSection = (event) => {
    const title = event.target;
    const content = title.nextElementSibling;
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        title.textContent = title.textContent.replace('📹 Videos', '▼ Videos').replace('🖼️ Pictures', '▼ Pictures');
    } else {
        content.style.display = 'none';
        title.textContent = title.textContent.replace('▼ Videos', '📹 Videos').replace('▼ Pictures', '🖼️ Pictures');
    }
};

const toggleSubsection = (event) => {
    const title = event.target.closest('.subsection-title');
    const content = title.nextElementSibling;
    
    if (content.style.display === 'grid') {
        content.style.display = 'none';
        title.classList.remove('open');
    } else {
        content.style.display = 'grid';
        title.classList.add('open');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    displayGallery();

    // Close lightbox on outside click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });
    // Initialize navigation dropdown behavior: show only group titles when opened,
    // and allow each group title to expand its own items.
    const initNavDropdown = () => {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (!dropdownToggle || !dropdownMenu) return;

        // start hidden
        dropdownMenu.style.display = 'none';

        // ensure items are hidden and group titles show an arrow next to the emoji
        dropdownMenu.querySelectorAll('.dropdown-group').forEach(group => {
            const title = group.querySelector('.dropdown-group-title');
            const items = group.querySelectorAll('.dropdown-item');
            items.forEach(i => i.style.display = 'none');
            if (title) {
                // if arrow already exists skip rebuilding
                if (!title.querySelector('.dropdown-arrow')) {
                    const raw = title.innerHTML.trim();
                    const parts = raw.split(/\s+/);
                    const emoji = parts[0] || '';
                    const rest = parts.slice(1).join(' ') || '';

                    // build structured content: emoji, arrow span, label
                    title.innerHTML = '';
                    const emojiSpan = document.createElement('span');
                    emojiSpan.className = 'dropdown-emoji';
                    emojiSpan.innerHTML = emoji;
                    const arrowSpan = document.createElement('span');
                    arrowSpan.className = 'dropdown-arrow';
                    arrowSpan.textContent = '▶';
                    const labelSpan = document.createElement('span');
                    labelSpan.className = 'dropdown-label';
                    labelSpan.textContent = rest;

                    title.appendChild(emojiSpan);
                    title.appendChild(document.createTextNode(' '));
                    title.appendChild(arrowSpan);
                    title.appendChild(document.createTextNode(' '));
                    title.appendChild(labelSpan);
                }

                const arrow = title.querySelector('.dropdown-arrow');
                // keep the anchor navigable; attach expand/collapse to the arrow only
                title.dataset.open = 'false';
                if (arrow) {
                    arrow.style.cursor = 'pointer';
                    arrow.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        const isOpen = title.dataset.open === 'true';
                        items.forEach(it => it.style.display = isOpen ? 'none' : 'block');
                        title.dataset.open = isOpen ? 'false' : 'true';
                        arrow.textContent = isOpen ? '▶' : '▼';
                        title.classList.toggle('open', !isOpen);
                    });
                }
            }
        });

        dropdownToggle.addEventListener('click', (ev) => {
            ev.preventDefault();
            const open = dropdownMenu.style.display === 'block';
            if (open) {
                dropdownMenu.style.display = 'none';
            } else {
                // collapse all groups and show only titles
                dropdownMenu.style.display = 'block';
                dropdownMenu.querySelectorAll('.dropdown-item').forEach(i => i.style.display = 'none');
                dropdownMenu.querySelectorAll('.dropdown-group-title').forEach(t => {
                    t.dataset.open = 'false';
                    const arrow = t.querySelector('.dropdown-arrow');
                    if (arrow) arrow.textContent = '▶';
                    t.classList.remove('open');
                });
            }
        });

        // close dropdown when clicking outside
        document.addEventListener('click', (ev) => {
            if (!dropdownMenu.contains(ev.target) && !dropdownToggle.contains(ev.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    };

    initNavDropdown();
});
